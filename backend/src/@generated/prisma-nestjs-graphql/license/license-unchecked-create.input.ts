import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { UserUncheckedCreateNestedOneWithoutLicenseInput } from '../user/user-unchecked-create-nested-one-without-license.input';

@InputType()
export class LicenseUncheckedCreateInput {
  @Field(() => Int, { nullable: true })
  id?: number;

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

  @Field(() => UserUncheckedCreateNestedOneWithoutLicenseInput, {
    nullable: true,
  })
  user?: UserUncheckedCreateNestedOneWithoutLicenseInput;
}
