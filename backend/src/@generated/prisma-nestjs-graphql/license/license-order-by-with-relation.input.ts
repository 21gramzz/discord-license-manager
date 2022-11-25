import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class LicenseOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  licenseKey?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @HideField()
  expirationDate?: keyof typeof SortOrder;

  @HideField()
  isActivated?: keyof typeof SortOrder;

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  user?: UserOrderByWithRelationInput;
}
