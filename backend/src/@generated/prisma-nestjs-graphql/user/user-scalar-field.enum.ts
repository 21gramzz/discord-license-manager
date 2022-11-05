import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
  id = 'id',
  userName = 'userName',
  discordId = 'discordId',
  discordAvatarId = 'discordAvatarId',
  createdAt = 'createdAt',
  licenseKey = 'licenseKey',
}

registerEnumType(UserScalarFieldEnum, {
  name: 'UserScalarFieldEnum',
  description: undefined,
});
