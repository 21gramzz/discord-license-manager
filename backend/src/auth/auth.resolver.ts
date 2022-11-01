import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { AuthService } from 'src/auth/auth.service';
import { LoginAdminResponse } from 'src/auth/dto/login-admin.response';
import { LoginAdminInput } from 'src/auth/dto/login-admin.input';
import { UseGuards } from '@nestjs/common';
import { GqlJwtAuthGuard, GqlSessionAuthGuard } from './guards/gql-auth.guard';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import { LoginUserInput } from './dto/login-user.input';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginAdminResponse)
  @UseGuards(GqlJwtAuthGuard)
  async loginAdmin(
    @Args('loginAdminInput') loginAdminInput: LoginAdminInput,
    @Context() context,
  ) {
    return this.authService.loginAdmin(context.user);
  }

  @Mutation(() => User)
  @UseGuards(GqlSessionAuthGuard)
  async loginUser(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() context,
  ) {
    const user = await this.authService.loginUser(context.user);
    context.req.session.user = user.licenseKey;
    return user;
  }
}
