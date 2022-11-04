import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';

@InputType()
export class LicenseCreateWithoutUserInput {

    @Field(() => Role, {nullable:false})
    @Validator.IsNotEmpty()
    role!: keyof typeof Role;

    @Field(() => String, {nullable:false})
    licenseKey!: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    expirationDate?: Date | string;

    @HideField()
    isActivated?: boolean;
}
