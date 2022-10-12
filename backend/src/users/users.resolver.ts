import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import { UserService } from './users.service';
import { FindUniqueUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-unique-user.args';
import { NotFoundException } from '@nestjs/common';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  async findUniqueUser(@Args() args: FindUniqueUserArgs) {
    const user = await this.userService.findUniqueUser(args);
    if (!user) {
      throw new NotFoundException('Could not find license');
    }
    return user;
  }
}
