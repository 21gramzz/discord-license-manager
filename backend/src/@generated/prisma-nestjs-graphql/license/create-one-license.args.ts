import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LicenseCreateInput } from './license-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneLicenseArgs {

    @Field(() => LicenseCreateInput, {nullable:false})
    @Type(() => LicenseCreateInput)
    @ValidateNested()
    data!: LicenseCreateInput;
}
