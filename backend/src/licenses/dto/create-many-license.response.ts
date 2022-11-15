import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateManyLicenseResponse {
  @Field()
  count: number;
}
