import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumRoleWithAggregatesFilter } from '../prisma/enum-role-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class LicenseScalarWhereWithAggregatesInput {
  @Field(() => [LicenseScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<LicenseScalarWhereWithAggregatesInput>;

  @Field(() => [LicenseScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<LicenseScalarWhereWithAggregatesInput>;

  @Field(() => [LicenseScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<LicenseScalarWhereWithAggregatesInput>;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  id?: IntWithAggregatesFilter;

  @Field(() => EnumRoleWithAggregatesFilter, { nullable: true })
  role?: EnumRoleWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  licenseKey?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @HideField()
  expirationDate?: DateTimeNullableWithAggregatesFilter;

  @HideField()
  isActivated?: BoolWithAggregatesFilter;
}
