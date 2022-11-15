import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminUpdateManyMutationInput } from './admin-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { AdminWhereInput } from './admin-where.input';

@ArgsType()
export class UpdateManyAdminArgs {
  @Field(() => AdminUpdateManyMutationInput, { nullable: false })
  @Type(() => AdminUpdateManyMutationInput)
  @ValidateNested()
  data!: AdminUpdateManyMutationInput;

  @Field(() => AdminWhereInput, { nullable: true })
  @Type(() => AdminWhereInput)
  where?: AdminWhereInput;
}
