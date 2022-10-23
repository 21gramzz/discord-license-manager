import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import { UsersService } from './users.service';
import { FindUniqueUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-unique-user.args';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User)
  @UseGuards(JwtAuthGuard)
  async user(@Args() args: FindUniqueUserArgs) {
    return await this.usersService.findUniqueUser(args);
  }
}
