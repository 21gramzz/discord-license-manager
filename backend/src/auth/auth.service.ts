import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminsService } from 'src/admins/admins.service';
import { Admin } from 'src/@generated/prisma-nestjs-graphql/admin/admin.model';
import { LoginResponse } from 'src/auth/dto/login-admin.response';

@Injectable()
export class AuthService {
  constructor(
    private adminService: AdminsService,
    private jwtService: JwtService,
  ) {}

  async validateAdmin(email: string, password: string): Promise<Admin | null> {
    const admin = await this.adminService.findUniqueAdmin({
      where: { email: email },
    });

    if (admin && admin.password === password) {
      return admin;
    }

    return null;
  }

  async login(admin: Admin): Promise<LoginResponse> {
    const payload = { email: admin.email, sub: admin.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
