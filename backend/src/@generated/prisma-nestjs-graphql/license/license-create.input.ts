import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutLicenseInput } from '../user/user-create-nested-one-without-license.input';

@InputType()
export class LicenseCreateInput {
  @Field(() => Role, { nullable: false })
  @Validator.IsNotEmpty()
  role!: keyof typeof Role;

  @Field(() => String, { nullable: false })
  @Validator.Length(64, 64)
  licenseKey!: string;

  @HideField()
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  @Validator.IsDate()
  expirationDate?: Date | string;

  @Field(() => Boolean, { nullable: true })
  isActivated?: boolean;

  @Field(() => UserCreateNestedOneWithoutLicenseInput, { nullable: true })
  user?: UserCreateNestedOneWithoutLicenseInput;
}
