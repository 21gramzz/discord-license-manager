import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class LicenseMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  role?: true;

  @Field(() => Boolean, { nullable: true })
  licenseKey?: true;

  @HideField()
  createdAt?: true;

  @Field(() => Boolean, { nullable: true })
  expirationDate?: true;

  @Field(() => Boolean, { nullable: true })
  isActivated?: true;
}
