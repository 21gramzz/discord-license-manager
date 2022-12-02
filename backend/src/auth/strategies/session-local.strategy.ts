import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class SessionLocalStrategy extends PassportStrategy(
  Strategy,
  'session-local',
) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'licenseKey',
      passwordField: 'licenseKey',
    });
  }

  async validate(licenseKey: string): Promise<User> {
    const user = this.authService.validateUser({ licenseKey });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
