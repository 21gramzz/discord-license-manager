import { UseGuards } from '@nestjs/common';
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
  admin(@Args() args: FindUniqueAdminArgs) {
    return this.adminsService.findUniqueAdmin(args);
  }
}
