import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class LicenseCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  role!: number;

  @Field(() => Int, { nullable: false })
  licenseKey!: number;

  @HideField()
  createdAt!: number;

  @Field(() => Int, { nullable: false })
  expirationDate!: number;

  @Field(() => Int, { nullable: false })
  isActivated!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
