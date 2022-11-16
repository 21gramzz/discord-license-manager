import { Field, ObjectType } from '@nestjs/graphql';
import { Role } from 'src/@generated/prisma-nestjs-graphql/prisma/role.enum';

@ObjectType()
export class CreateManyLicenseResponse {
  @Field(() => Role)
  role!: keyof typeof Role;

  @Field(() => [String])
  licenseKeys!: string[];
}
