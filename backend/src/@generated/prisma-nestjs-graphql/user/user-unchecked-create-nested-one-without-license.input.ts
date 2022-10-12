import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLicenseInput } from './user-create-without-license.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutLicenseInput } from './user-create-or-connect-without-license.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedOneWithoutLicenseInput {
  @Field(() => UserCreateWithoutLicenseInput, { nullable: true })
  @Type(() => UserCreateWithoutLicenseInput)
  create?: UserCreateWithoutLicenseInput;

  @Field(() => UserCreateOrConnectWithoutLicenseInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutLicenseInput)
  connectOrCreate?: UserCreateOrConnectWithoutLicenseInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: UserWhereUniqueInput;
}
