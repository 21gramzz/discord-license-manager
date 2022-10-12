import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LicenseWhereUniqueInput } from './license-where-unique.input';
import { Type } from 'class-transformer';
import { LicenseCreateInput } from './license-create.input';
import { LicenseUpdateInput } from './license-update.input';

@ArgsType()
export class UpsertOneLicenseArgs {
  @Field(() => LicenseWhereUniqueInput, { nullable: false })
  @Type(() => LicenseWhereUniqueInput)
  where!: LicenseWhereUniqueInput;

  @Field(() => LicenseCreateInput, { nullable: false })
  @Type(() => LicenseCreateInput)
  create!: LicenseCreateInput;

  @Field(() => LicenseUpdateInput, { nullable: false })
  @Type(() => LicenseUpdateInput)
  update!: LicenseUpdateInput;
}
