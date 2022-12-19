import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../../@generated/prisma-nestjs-graphql/prisma/role.enum';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';

@InputType()
export class CreateManyLicenseInput {
  @Field(() => Role, { nullable: false })
  @Validator.IsNotEmpty()
  role!: keyof typeof Role;

  @Field(() => Int)
  @Validator.IsInt()
  @Validator.Min(1)
  @Validator.Max(10)
  qty!: number;
}
