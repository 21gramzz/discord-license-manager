import { NotFoundException, UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Admin } from 'src/@generated/prisma-nestjs-graphql/admin/admin.model';
import { FindUniqueAdminArgs } from 'src/@generated/prisma-nestjs-graphql/admin/find-unique-admin.args';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AdminsService } from './admins.service';

@Resolver()
export class AdminsResolver {
  constructor(private readonly adminsService: AdminsService) {}

  @Query(() => Admin)
  @UseGuards(JwtAuthGuard)
  async admin(@Args() args: FindUniqueAdminArgs) {
    const admin = await this.adminsService.findUniqueAdmin(args);

    if (!admin) {
      throw new NotFoundException('Could not find user');
    } else {
      return admin;
    }
  }
}
