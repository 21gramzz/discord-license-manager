import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LicenseWhereInput } from './license-where.input';
import { Type } from 'class-transformer';
import { LicenseOrderByWithRelationInput } from './license-order-by-with-relation.input';
import { LicenseWhereUniqueInput } from './license-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LicenseScalarFieldEnum } from './license-scalar-field.enum';

@ArgsType()
export class FindManyLicenseArgs {

    @Field(() => LicenseWhereInput, {nullable:true})
    @Type(() => LicenseWhereInput)
    where?: LicenseWhereInput;

    @Field(() => [LicenseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LicenseOrderByWithRelationInput>;

    @Field(() => LicenseWhereUniqueInput, {nullable:true})
    cursor?: LicenseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LicenseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LicenseScalarFieldEnum>;
}
