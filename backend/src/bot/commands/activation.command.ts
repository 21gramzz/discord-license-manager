import { TransformPipe } from '@discord-nestjs/common';
import {
  Command,
  DiscordTransformedCommand,
  InjectDiscordClient,
  Payload,
  TransformedCommandExecutionContext,
  UsePipes,
} from '@discord-nestjs/core';
import { LicensesService } from 'src/licenses/licenses.service';
import { UsersService } from 'src/users/users.service';
import { ActivationDto } from '../dto/activation.dto';
import { Client } from 'discord.js';

@Command({
  name: 'activate',
  description: 'activation license key',
})
@UsePipes(TransformPipe)
export class ActivationCommand
  implements DiscordTransformedCommand<ActivationDto>
{
  constructor(
    private readonly licensesService: LicensesService,
    private readonly usersService: UsersService,
    @InjectDiscordClient()
    private readonly client: Client,
  ) {}
  async handler(
    @Payload() dto: ActivationDto,
    { interaction }: TransformedCommandExecutionContext,
  ): Promise<string> {
    try {
      if (!interaction.user.bot) {
        const license = await this.licensesService.findUniqueLicense({
          where: { licenseKey: dto.licensekey },
        });

        if (license) {
          if (!license.isActivated) {
            await this.licensesService.updateOneLicense({
              where: { licenseKey: dto.licensekey },
              data: {
                isActivated: { set: true },
              },
            });
            const roles: string[] = [
              process.env.DISCORD_BOT_ROLE_AUTHENTICATED,
            ];
            const guild = await this.client.guilds.fetch(
              process.env.DISCORD_BOT_GUILD_ID,
            );

            const isMember = await guild.members.fetch(interaction.user.id);
            if (isMember) {
              switch (license.role) {
                case 'RENEWAL':
                  roles.push(process.env.DISCORD_BOT_ROLE_RENEWAL);
                  break;
                case 'LIFETIME':
                  roles.push(process.env.DISCORD_BOT_ROLE_LIFE_TIME);
                  break;
                case 'FAMILYANDFRIENDS':
                  roles.push(process.env.DISCORD_BOT_ROLE_FAMILY_AND_FRIENDS);
                  break;
              }
              await isMember.roles.add(roles);
            }

            const user = await this.usersService.createUser({
              data: {
                userName: interaction.user.username,
                discordId: interaction.user.id,
                discordAvatarId: interaction.user.avatar,
                license: { connect: { licenseKey: license.licenseKey } },
              },
            });

            if (user) {
              return `Your license has been successfully activated!\nLicense Key: \`${license.licenseKey}\``;
            }
          } else {
            return 'Your license key has already been used';
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
    return 'Your license key is invalid';
  }
}
