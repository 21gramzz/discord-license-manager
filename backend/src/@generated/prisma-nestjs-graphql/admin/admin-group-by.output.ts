import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { AdminCountAggregate } from './admin-count-aggregate.output';
import { AdminAvgAggregate } from './admin-avg-aggregate.output';
import { AdminSumAggregate } from './admin-sum-aggregate.output';
import { AdminMinAggregate } from './admin-min-aggregate.output';
import { AdminMaxAggregate } from './admin-max-aggregate.output';

@ObjectType()
export class AdminGroupBy {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  email!: string;

  @HideField()
  password!: string;

  @Field(() => AdminCountAggregate, { nullable: true })
  _count?: AdminCountAggregate;

  @Field(() => AdminAvgAggregate, { nullable: true })
  _avg?: AdminAvgAggregate;

  @Field(() => AdminSumAggregate, { nullable: true })
  _sum?: AdminSumAggregate;

  @Field(() => AdminMinAggregate, { nullable: true })
  _min?: AdminMinAggregate;

  @Field(() => AdminMaxAggregate, { nullable: true })
  _max?: AdminMaxAggregate;
}
