import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LicenseWhereUniqueInput } from './license-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueLicenseArgs {
  @Field(() => LicenseWhereUniqueInput, { nullable: false })
  @Type(() => LicenseWhereUniqueInput)
  where!: LicenseWhereUniqueInput;
}
