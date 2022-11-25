import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LicenseWhereInput } from './license-where.input';
import { Type } from 'class-transformer';
import { LicenseOrderByWithRelationInput } from './license-order-by-with-relation.input';
import { LicenseWhereUniqueInput } from './license-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LicenseCountAggregateInput } from './license-count-aggregate.input';
import { LicenseAvgAggregateInput } from './license-avg-aggregate.input';
import { LicenseSumAggregateInput } from './license-sum-aggregate.input';
import { LicenseMinAggregateInput } from './license-min-aggregate.input';
import { LicenseMaxAggregateInput } from './license-max-aggregate.input';

@ArgsType()
export class LicenseAggregateArgs {

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

    @Field(() => LicenseCountAggregateInput, {nullable:true})
    _count?: LicenseCountAggregateInput;

    @Field(() => LicenseAvgAggregateInput, {nullable:true})
    _avg?: LicenseAvgAggregateInput;

    @Field(() => LicenseSumAggregateInput, {nullable:true})
    _sum?: LicenseSumAggregateInput;

    @Field(() => LicenseMinAggregateInput, {nullable:true})
    _min?: LicenseMinAggregateInput;

    @Field(() => LicenseMaxAggregateInput, {nullable:true})
    _max?: LicenseMaxAggregateInput;
}
