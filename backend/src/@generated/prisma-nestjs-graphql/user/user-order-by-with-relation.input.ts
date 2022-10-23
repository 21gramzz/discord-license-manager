import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { LicenseOrderByWithRelationInput } from '../license/license-order-by-with-relation.input';

@InputType()
export class UserOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  userName?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  discordId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  discordAvatarId?: keyof typeof SortOrder;

  @HideField()
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  licenseKey?: keyof typeof SortOrder;

  @Field(() => LicenseOrderByWithRelationInput, { nullable: true })
  license?: LicenseOrderByWithRelationInput;
}
