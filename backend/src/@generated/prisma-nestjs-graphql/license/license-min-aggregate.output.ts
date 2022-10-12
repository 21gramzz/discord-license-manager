import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class LicenseMinAggregate {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;

  @Field(() => String, { nullable: true })
  licenseKey?: string;

  @HideField()
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  expirationDate?: Date | string;

  @Field(() => Boolean, { nullable: true })
  isActivated?: boolean;
}
