import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserCreateManyInput {
  @Field(() => Int, { nullable: true })
  id?: number;

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

  @Field(() => String, { nullable: false })
  licenseKey!: string;
}
