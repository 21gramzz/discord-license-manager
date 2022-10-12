import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LicenseCreateWithoutUserInput } from './license-create-without-user.input';
import { Type } from 'class-transformer';
import { LicenseCreateOrConnectWithoutUserInput } from './license-create-or-connect-without-user.input';
import { LicenseWhereUniqueInput } from './license-where-unique.input';

@InputType()
export class LicenseCreateNestedOneWithoutUserInput {
  @Field(() => LicenseCreateWithoutUserInput, { nullable: true })
  @Type(() => LicenseCreateWithoutUserInput)
  create?: LicenseCreateWithoutUserInput;

  @Field(() => LicenseCreateOrConnectWithoutUserInput, { nullable: true })
  @Type(() => LicenseCreateOrConnectWithoutUserInput)
  connectOrCreate?: LicenseCreateOrConnectWithoutUserInput;

  @Field(() => LicenseWhereUniqueInput, { nullable: true })
  @Type(() => LicenseWhereUniqueInput)
  connect?: LicenseWhereUniqueInput;
}
