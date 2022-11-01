import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdminsModule } from '../admins/admins.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthResolver } from './auth.resolver';
import {
  JwtLocalStrategy,
  SessionLocalStrategy,
} from 'src/auth/strategies/local.strategy';
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    UsersModule,
    AdminsModule,
    PassportModule.register({ session: true }),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [
    AuthService,
    AuthResolver,
    JwtLocalStrategy,
    JwtStrategy,
    SessionLocalStrategy,
  ],
})
export class AuthModule {}
