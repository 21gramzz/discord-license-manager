import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { LicenseCountOrderByAggregateInput } from './license-count-order-by-aggregate.input';
import { LicenseAvgOrderByAggregateInput } from './license-avg-order-by-aggregate.input';
import { LicenseMaxOrderByAggregateInput } from './license-max-order-by-aggregate.input';
import { LicenseMinOrderByAggregateInput } from './license-min-order-by-aggregate.input';
import { LicenseSumOrderByAggregateInput } from './license-sum-order-by-aggregate.input';

@InputType()
export class LicenseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    licenseKey?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    expirationDate?: keyof typeof SortOrder;

    @HideField()
    isActivated?: keyof typeof SortOrder;

    @Field(() => LicenseCountOrderByAggregateInput, {nullable:true})
    _count?: LicenseCountOrderByAggregateInput;

    @Field(() => LicenseAvgOrderByAggregateInput, {nullable:true})
    _avg?: LicenseAvgOrderByAggregateInput;

    @Field(() => LicenseMaxOrderByAggregateInput, {nullable:true})
    _max?: LicenseMaxOrderByAggregateInput;

    @Field(() => LicenseMinOrderByAggregateInput, {nullable:true})
    _min?: LicenseMinOrderByAggregateInput;

    @Field(() => LicenseSumOrderByAggregateInput, {nullable:true})
    _sum?: LicenseSumOrderByAggregateInput;
}
