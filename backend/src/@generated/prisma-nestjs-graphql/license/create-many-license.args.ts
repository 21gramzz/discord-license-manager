import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LicenseCreateManyInput } from './license-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManyLicenseArgs {
  @Field(() => [LicenseCreateManyInput], { nullable: false })
  @Type(() => LicenseCreateManyInput)
  @ValidateNested()
  data!: Array<LicenseCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
