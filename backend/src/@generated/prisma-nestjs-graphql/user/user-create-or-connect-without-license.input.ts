import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutLicenseInput } from './user-create-without-license.input';

@InputType()
export class UserCreateOrConnectWithoutLicenseInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateWithoutLicenseInput, { nullable: false })
  @Type(() => UserCreateWithoutLicenseInput)
  create!: UserCreateWithoutLicenseInput;
}
