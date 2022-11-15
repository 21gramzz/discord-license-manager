import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LicenseUpdateWithoutUserInput } from './license-update-without-user.input';
import { Type } from 'class-transformer';
import { LicenseCreateWithoutUserInput } from './license-create-without-user.input';

@InputType()
export class LicenseUpsertWithoutUserInput {
  @Field(() => LicenseUpdateWithoutUserInput, { nullable: false })
  @Type(() => LicenseUpdateWithoutUserInput)
  update!: LicenseUpdateWithoutUserInput;

  @Field(() => LicenseCreateWithoutUserInput, { nullable: false })
  @Type(() => LicenseCreateWithoutUserInput)
  create!: LicenseCreateWithoutUserInput;
}
