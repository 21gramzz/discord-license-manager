import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class LicenseMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  role?: true;

  @HideField()
  licenseKey?: true;

  @HideField()
  createdAt?: true;

  @HideField()
  expirationDate?: true;

  @HideField()
  isActivated?: true;
}
