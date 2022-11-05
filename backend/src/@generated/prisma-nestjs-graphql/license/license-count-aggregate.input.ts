import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class LicenseCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  role?: true;

  @Field(() => Boolean, { nullable: true })
  licenseKey?: true;

  @HideField()
  createdAt?: true;

  @HideField()
  expirationDate?: true;

  @HideField()
  isActivated?: true;

  @Field(() => Boolean, { nullable: true })
  _all?: true;
}
