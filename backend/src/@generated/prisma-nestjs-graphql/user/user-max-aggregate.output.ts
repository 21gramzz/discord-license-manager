import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class UserMaxAggregate {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  userName?: string;

  @Field(() => String, { nullable: true })
  discordId?: string;

  @Field(() => String, { nullable: true })
  discordAvatarId?: string;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  licenseKey?: string;
}
