import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { LicenseRelationFilter } from '../license/license-relation-filter.input';

@InputType()
export class UserWhereInput {
  @Field(() => [UserWhereInput], { nullable: true })
  AND?: Array<UserWhereInput>;

  @Field(() => [UserWhereInput], { nullable: true })
  OR?: Array<UserWhereInput>;

  @Field(() => [UserWhereInput], { nullable: true })
  NOT?: Array<UserWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  userName?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  discordId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  discordAvatarId?: StringFilter;

  @HideField()
  createdAt?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  licenseKey?: StringFilter;

  @Field(() => LicenseRelationFilter, { nullable: true })
  license?: LicenseRelationFilter;
}