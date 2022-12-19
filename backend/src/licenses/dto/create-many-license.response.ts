import { Field, ObjectType } from '@nestjs/graphql';
import { Role } from '../../@generated/prisma-nestjs-graphql/prisma/role.enum';

@ObjectType()
export class CreateManyLicenseResponse {
  @Field(() => Role)
  role!: keyof typeof Role;

  @Field(() => [String])
  licenseKeys!: string[];
}
