import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LicenseWhereInput } from './license-where.input';

@InputType()
export class LicenseRelationFilter {

    @Field(() => LicenseWhereInput, {nullable:true})
    is?: LicenseWhereInput;

    @Field(() => LicenseWhereInput, {nullable:true})
    isNot?: LicenseWhereInput;
}
