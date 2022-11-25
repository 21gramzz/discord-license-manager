import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    userName!: string;

    @Field(() => String, {nullable:false})
    discordId!: string;

    @Field(() => String, {nullable:false})
    discordAvatarId!: string;

    @HideField()
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    licenseKey!: string;
}
