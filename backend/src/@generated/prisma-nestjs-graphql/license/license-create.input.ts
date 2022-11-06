import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutLicenseInput } from '../user/user-create-nested-one-without-license.input';

@InputType()
export class LicenseCreateInput {

    @Field(() => Role, {nullable:false})
    @Validator.IsNotEmpty()
    role!: keyof typeof Role;

    @HideField()
    licenseKey!: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    expirationDate?: Date | string;

    @HideField()
    isActivated?: boolean;

    @Field(() => UserCreateNestedOneWithoutLicenseInput, {nullable:true})
    user?: UserCreateNestedOneWithoutLicenseInput;
}
