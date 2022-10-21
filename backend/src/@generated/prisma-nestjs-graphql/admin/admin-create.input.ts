import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class AdminCreateInput {
  @Field(() => String, { nullable: false })
  @Validator.IsEmail()
  email!: string;

  @Field(() => String, { nullable: false })
  password!: string;
}
