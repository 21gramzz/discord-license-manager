import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { HideField } from '@nestjs/graphql';
import { LicenseCountAggregate } from './license-count-aggregate.output';
import { LicenseAvgAggregate } from './license-avg-aggregate.output';
import { LicenseSumAggregate } from './license-sum-aggregate.output';
import { LicenseMinAggregate } from './license-min-aggregate.output';
import { LicenseMaxAggregate } from './license-max-aggregate.output';

@ObjectType()
export class LicenseGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => String, {nullable:false})
    licenseKey!: string;

    @HideField()
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    expirationDate?: Date | string;

    @Field(() => Boolean, {nullable:false})
    isActivated!: boolean;

    @Field(() => LicenseCountAggregate, {nullable:true})
    _count?: LicenseCountAggregate;

    @Field(() => LicenseAvgAggregate, {nullable:true})
    _avg?: LicenseAvgAggregate;

    @Field(() => LicenseSumAggregate, {nullable:true})
    _sum?: LicenseSumAggregate;

    @Field(() => LicenseMinAggregate, {nullable:true})
    _min?: LicenseMinAggregate;

    @Field(() => LicenseMaxAggregate, {nullable:true})
    _max?: LicenseMaxAggregate;
}
