import { Module } from '@nestjs/common';
import { LicensesService } from './licenses.service';
import { LicensesResolver } from './licenses.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [LicensesService, LicensesResolver, PrismaService],
  exports: [LicensesService],
})
export class LicensesModule {}
