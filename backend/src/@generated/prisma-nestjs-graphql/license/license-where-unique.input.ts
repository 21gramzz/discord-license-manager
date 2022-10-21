import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class LicenseWhereUniqueInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @HideField()
  licenseKey?: string;
}
