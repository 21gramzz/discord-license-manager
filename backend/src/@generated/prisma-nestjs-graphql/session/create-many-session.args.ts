import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionCreateManyInput } from './session-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManySessionArgs {
  @Field(() => [SessionCreateManyInput], { nullable: false })
  @Type(() => SessionCreateManyInput)
  @ValidateNested()
  data!: Array<SessionCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
