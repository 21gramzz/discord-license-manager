import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class LicenseMinOrderByAggregateInput {
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
}
