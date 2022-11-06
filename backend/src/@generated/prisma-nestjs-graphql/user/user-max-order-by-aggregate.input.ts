import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    discordId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    discordAvatarId?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    licenseKey?: keyof typeof SortOrder;
}
