import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  userName!: number;

  @Field(() => Int, { nullable: false })
  discordId!: number;

  @Field(() => Int, { nullable: false })
  discordAvatarId!: number;

  @HideField()
  createdAt!: number;

  @Field(() => Int, { nullable: false })
  licenseKey!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
