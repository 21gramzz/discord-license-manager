import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  userName?: true;

  @Field(() => Boolean, { nullable: true })
  discordId?: true;

  @Field(() => Boolean, { nullable: true })
  discordAvatarId?: true;

  @HideField()
  createdAt?: true;

  @Field(() => Boolean, { nullable: true })
  licenseKey?: true;

  @Field(() => Boolean, { nullable: true })
  _all?: true;
}
