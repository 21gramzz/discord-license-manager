import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminCreateManyInput } from './admin-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManyAdminArgs {

    @Field(() => [AdminCreateManyInput], {nullable:false})
    @Type(() => AdminCreateManyInput)
    @ValidateNested()
    data!: Array<AdminCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
