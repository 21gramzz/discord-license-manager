import { DiscordModule } from '@discord-nestjs/core';
import { Module } from '@nestjs/common';
import { ActivationCommand } from './commands/activation.command';
import { BotGateway } from './bot.gateway';
import { LicensesModule } from 'src/licenses/licenses.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [LicensesModule, UsersModule, DiscordModule.forFeature()],
  providers: [ActivationCommand, BotGateway],
})
export class BotModule {}
