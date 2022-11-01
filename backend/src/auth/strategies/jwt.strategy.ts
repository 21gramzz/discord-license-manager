import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Admin } from 'src/@generated/prisma-nestjs-graphql/admin/admin.model';
import { AdminsService } from 'src/admins/admins.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly adminsService: AdminsService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET_KEY,
    });
  }

  async validate(payload: {
    email: string;
    sub: string;
  }): Promise<Admin | null> {
    return this.adminsService.findUniqueAdmin({
      where: { email: payload.email },
    });
  }
}
