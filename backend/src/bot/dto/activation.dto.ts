import { Param } from '@discord-nestjs/core';

export class ActivationDto {
  @Param({
    name: 'licensekey',
    description: 'license key',
    required: true,
  })
  licensekey: string;
}
