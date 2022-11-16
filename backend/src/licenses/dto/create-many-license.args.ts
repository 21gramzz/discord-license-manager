import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreateManyLicenseInput } from './create-many-license.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyLicenseArgs {
  @Field(() => CreateManyLicenseInput, { nullable: false })
  @Type(() => CreateManyLicenseInput)
  @ValidateNested()
  data!: CreateManyLicenseInput;
}
