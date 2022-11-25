import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLicenseInput } from './user-create-without-license.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutLicenseInput } from './user-create-or-connect-without-license.input';
import { UserUpsertWithoutLicenseInput } from './user-upsert-without-license.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutLicenseInput } from './user-update-without-license.input';

@InputType()
export class UserUpdateOneWithoutLicenseNestedInput {

    @Field(() => UserCreateWithoutLicenseInput, {nullable:true})
    @Type(() => UserCreateWithoutLicenseInput)
    create?: UserCreateWithoutLicenseInput;

    @Field(() => UserCreateOrConnectWithoutLicenseInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutLicenseInput)
    connectOrCreate?: UserCreateOrConnectWithoutLicenseInput;

    @Field(() => UserUpsertWithoutLicenseInput, {nullable:true})
    @Type(() => UserUpsertWithoutLicenseInput)
    upsert?: UserUpsertWithoutLicenseInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutLicenseInput, {nullable:true})
    @Type(() => UserUpdateWithoutLicenseInput)
    update?: UserUpdateWithoutLicenseInput;
}
