import { registerEnumType } from '@nestjs/graphql';

export enum LicenseScalarFieldEnum {
  id = 'id',
  role = 'role',
  licenseKey = 'licenseKey',
  createdAt = 'createdAt',
  expirationDate = 'expirationDate',
  isActivated = 'isActivated',
}

registerEnumType(LicenseScalarFieldEnum, {
  name: 'LicenseScalarFieldEnum',
  description: undefined,
});
