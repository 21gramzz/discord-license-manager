import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LicenseCreateWithoutUserInput } from './license-create-without-user.input';
import { Type } from 'class-transformer';
import { LicenseCreateOrConnectWithoutUserInput } from './license-create-or-connect-without-user.input';
import { LicenseUpsertWithoutUserInput } from './license-upsert-without-user.input';
import { LicenseWhereUniqueInput } from './license-where-unique.input';
import { LicenseUpdateWithoutUserInput } from './license-update-without-user.input';

@InputType()
export class LicenseUpdateOneRequiredWithoutUserNestedInput {
  @Field(() => LicenseCreateWithoutUserInput, { nullable: true })
  @Type(() => LicenseCreateWithoutUserInput)
  create?: LicenseCreateWithoutUserInput;

  @Field(() => LicenseCreateOrConnectWithoutUserInput, { nullable: true })
  @Type(() => LicenseCreateOrConnectWithoutUserInput)
  connectOrCreate?: LicenseCreateOrConnectWithoutUserInput;

  @Field(() => LicenseUpsertWithoutUserInput, { nullable: true })
  @Type(() => LicenseUpsertWithoutUserInput)
  upsert?: LicenseUpsertWithoutUserInput;

  @Field(() => LicenseWhereUniqueInput, { nullable: true })
  @Type(() => LicenseWhereUniqueInput)
  connect?: LicenseWhereUniqueInput;

  @Field(() => LicenseUpdateWithoutUserInput, { nullable: true })
  @Type(() => LicenseUpdateWithoutUserInput)
  update?: LicenseUpdateWithoutUserInput;
}
