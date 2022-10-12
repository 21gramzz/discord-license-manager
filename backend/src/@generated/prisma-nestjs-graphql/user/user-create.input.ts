import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { LicenseCreateNestedOneWithoutUserInput } from '../license/license-create-nested-one-without-user.input';

@InputType()
export class UserCreateInput {
  @Field(() => String, { nullable: false })
  @Validator.IsNotEmpty()
  userName!: string;

  @Field(() => String, { nullable: false })
  @Validator.IsNotEmpty()
  discordId!: string;

  @Field(() => String, { nullable: false })
  @Validator.IsNotEmpty()
  discordAvatarId!: string;

  @HideField()
  createdAt?: Date | string;

  @Field(() => LicenseCreateNestedOneWithoutUserInput, { nullable: false })
  license!: LicenseCreateNestedOneWithoutUserInput;
}
