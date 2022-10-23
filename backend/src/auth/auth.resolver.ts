import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { AuthService } from 'src/auth/auth.service';
import { LoginResponse } from 'src/auth/dto/login-admin.response';
import { LoginAdminInput } from 'src/auth/dto/login-admin.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './guards/gql-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  async login(
    @Args('loginAdminInput') loginAdminInput: LoginAdminInput,
    @Context() context,
  ) {
    return this.authService.login(context.user);
  }
}
