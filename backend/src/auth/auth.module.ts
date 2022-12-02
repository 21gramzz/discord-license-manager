import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdminsModule } from '../admins/admins.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthResolver } from './auth.resolver';
import { JwtLocalStrategy } from 'src/auth/strategies/jwt-local.strategy';
import { SessionLocalStrategy } from './strategies/session-local.strategy';
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';
import { UsersModule } from 'src/users/users.module';
import { AuthSerializer } from './serialization.provider';

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
    AuthSerializer,
  ],
})
export class AuthModule {}
