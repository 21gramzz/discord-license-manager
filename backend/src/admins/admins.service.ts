import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Admin } from '../@generated/prisma-nestjs-graphql/admin/admin.model';
import { FindUniqueAdminArgs } from 'src/@generated/prisma-nestjs-graphql/admin/find-unique-admin.args';

@Injectable()
export class AdminsService {
  constructor(private readonly prisma: PrismaService) {}

  async findUniqueAdmin(args: FindUniqueAdminArgs): Promise<Admin | null> {
    return this.prisma.admin.findUnique(args);
  }
}
