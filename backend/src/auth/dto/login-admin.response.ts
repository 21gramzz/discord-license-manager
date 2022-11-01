import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoginAdminResponse {
  @Field()
  access_token: string;
}
