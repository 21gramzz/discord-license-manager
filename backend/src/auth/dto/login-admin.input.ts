import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginAdminInput {
  @Field()
  email: string;
  @Field()
  password: string;
}
