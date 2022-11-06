import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { License } from '../license/license.model';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    userName!: string;

    @Field(() => String, {nullable:false})
    discordId!: string;

    @Field(() => String, {nullable:false})
    discordAvatarId!: string;

    @HideField()
    createdAt!: Date;

    @Field(() => String, {nullable:false})
    licenseKey!: string;

    @Field(() => License, {nullable:false})
    license?: License;
}
