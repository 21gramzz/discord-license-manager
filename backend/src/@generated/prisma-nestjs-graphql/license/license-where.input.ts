import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class LicenseWhereInput {
  @Field(() => [LicenseWhereInput], { nullable: true })
  AND?: Array<LicenseWhereInput>;

  @Field(() => [LicenseWhereInput], { nullable: true })
  OR?: Array<LicenseWhereInput>;

  @Field(() => [LicenseWhereInput], { nullable: true })
  NOT?: Array<LicenseWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => EnumRoleFilter, { nullable: true })
  role?: EnumRoleFilter;

  @Field(() => StringFilter, { nullable: true })
  licenseKey?: StringFilter;

  @HideField()
  createdAt?: DateTimeFilter;

  @HideField()
  expirationDate?: DateTimeNullableFilter;

  @HideField()
  isActivated?: BoolFilter;

  @Field(() => UserRelationFilter, { nullable: true })
  user?: UserRelationFilter;
}
