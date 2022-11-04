import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionCreateInput } from './session-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneSessionArgs {

    @Field(() => SessionCreateInput, {nullable:false})
    @Type(() => SessionCreateInput)
    @ValidateNested()
    data!: SessionCreateInput;
}
