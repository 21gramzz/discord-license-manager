import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreateManyLicenseInput } from './create-many-license.input';

@ArgsType()
export class CreateManyLicenseArgs {
  @Field(() => CreateManyLicenseInput)
  data!: CreateManyLicenseInput;
}
