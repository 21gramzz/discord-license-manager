import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from 'src/@generated/prisma-nestjs-graphql/prisma/role.enum';

@InputType()
export class CreateManyLicenseInput {
  @Field(() => Role)
  role!: keyof typeof Role;

  @Field(() => Number)
  qty!: number;
}
