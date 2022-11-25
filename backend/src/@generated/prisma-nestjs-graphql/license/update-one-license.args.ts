import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LicenseUpdateInput } from './license-update.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { LicenseWhereUniqueInput } from './license-where-unique.input';

@ArgsType()
export class UpdateOneLicenseArgs {

    @Field(() => LicenseUpdateInput, {nullable:false})
    @Type(() => LicenseUpdateInput)
    @ValidateNested()
    data!: LicenseUpdateInput;

    @Field(() => LicenseWhereUniqueInput, {nullable:false})
    @Type(() => LicenseWhereUniqueInput)
    where!: LicenseWhereUniqueInput;
}
