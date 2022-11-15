import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LicenseUpdateManyMutationInput } from './license-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { LicenseWhereInput } from './license-where.input';

@ArgsType()
export class UpdateManyLicenseArgs {
  @Field(() => LicenseUpdateManyMutationInput, { nullable: false })
  @Type(() => LicenseUpdateManyMutationInput)
  @ValidateNested()
  data!: LicenseUpdateManyMutationInput;

  @Field(() => LicenseWhereInput, { nullable: true })
  @Type(() => LicenseWhereInput)
  where?: LicenseWhereInput;
}
