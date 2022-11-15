import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutLicenseInput } from './user-update-without-license.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutLicenseInput } from './user-create-without-license.input';

@InputType()
export class UserUpsertWithoutLicenseInput {
  @Field(() => UserUpdateWithoutLicenseInput, { nullable: false })
  @Type(() => UserUpdateWithoutLicenseInput)
  update!: UserUpdateWithoutLicenseInput;

  @Field(() => UserCreateWithoutLicenseInput, { nullable: false })
  @Type(() => UserCreateWithoutLicenseInput)
  create!: UserCreateWithoutLicenseInput;
}
