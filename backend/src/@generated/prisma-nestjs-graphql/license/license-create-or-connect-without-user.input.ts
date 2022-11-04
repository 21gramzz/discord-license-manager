import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LicenseWhereUniqueInput } from './license-where-unique.input';
import { Type } from 'class-transformer';
import { LicenseCreateWithoutUserInput } from './license-create-without-user.input';

@InputType()
export class LicenseCreateOrConnectWithoutUserInput {

    @Field(() => LicenseWhereUniqueInput, {nullable:false})
    @Type(() => LicenseWhereUniqueInput)
    where!: LicenseWhereUniqueInput;

    @Field(() => LicenseCreateWithoutUserInput, {nullable:false})
    @Type(() => LicenseCreateWithoutUserInput)
    create!: LicenseCreateWithoutUserInput;
}
