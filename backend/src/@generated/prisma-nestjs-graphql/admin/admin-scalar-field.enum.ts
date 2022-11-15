import { registerEnumType } from '@nestjs/graphql';

export enum AdminScalarFieldEnum {
  id = 'id',
  email = 'email',
  password = 'password',
}

registerEnumType(AdminScalarFieldEnum, {
  name: 'AdminScalarFieldEnum',
  description: undefined,
});
