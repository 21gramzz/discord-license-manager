import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { HideField } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class License {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => Role, { nullable: false })
  role!: keyof typeof Role;

  @HideField()
  licenseKey!: string;

  @HideField()
  createdAt!: Date;

  @Field(() => Date, { nullable: true })
  expirationDate!: Date | null;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  isActivated!: boolean;

  @Field(() => User, { nullable: true })
  user?: User | null;
}
