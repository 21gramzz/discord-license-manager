import { Context, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import { UsersService } from './users.service';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/guards/authenticated.guard';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User)
  @UseGuards(AuthenticatedGuard)
  async user(@Context() context) {
    const user = await this.usersService.findUniqueUser({
      where: { id: context.req.user.id },
    });

    if (!user) {
      throw new NotFoundException('Could not find user');
    } else {
      return user;
    }
  }
}
