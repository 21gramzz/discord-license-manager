import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AdminsService } from './admins.service';
import { AdminsResolver } from './admins.resolver';

@Module({
  providers: [AdminsService, AdminsResolver, PrismaService],
  exports: [AdminsService],
})
export class AdminsModule {}
