import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { LicenseCreateNestedOneWithoutUserInput } from '../license/license-create-nested-one-without-user.input';

@InputType()
export class UserCreateInput {
  @Field(() => String, { nullable: false })
  userName!: string;

  @Field(() => String, { nullable: false })
  discordId!: string;

  @Field(() => String, { nullable: false })
  discordAvatarId!: string;

  @HideField()
  createdAt?: Date | string;

  @Field(() => LicenseCreateNestedOneWithoutUserInput, { nullable: false })
  license!: LicenseCreateNestedOneWithoutUserInput;
}
