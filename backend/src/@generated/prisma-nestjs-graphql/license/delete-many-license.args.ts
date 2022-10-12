import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LicenseWhereInput } from './license-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyLicenseArgs {
  @Field(() => LicenseWhereInput, { nullable: true })
  @Type(() => LicenseWhereInput)
  where?: LicenseWhereInput;
}
