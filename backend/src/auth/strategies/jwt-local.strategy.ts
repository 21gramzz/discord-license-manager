import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Admin } from 'src/@generated/prisma-nestjs-graphql/admin/admin.model';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class JwtLocalStrategy extends PassportStrategy(Strategy, 'jwt-local') {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<Admin> {
    const admin = this.authService.validateAdmin(email, password);

    if (!admin) {
      throw new UnauthorizedException();
    }

    return admin;
  }
}
