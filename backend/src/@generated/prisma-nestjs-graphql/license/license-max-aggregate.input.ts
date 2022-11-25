import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class LicenseMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  role?: true;

  @Field(() => Boolean, { nullable: true })
  licenseKey?: true;

  @Field(() => Boolean, { nullable: true })
  createdAt?: true;

  @HideField()
  expirationDate?: true;

  @HideField()
  isActivated?: true;
}
