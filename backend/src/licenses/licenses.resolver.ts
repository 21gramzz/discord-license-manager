import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { CreateOneLicenseArgs } from 'src/@generated/prisma-nestjs-graphql/license/create-one-license.args';
import { DeleteManyLicenseArgs } from 'src/@generated/prisma-nestjs-graphql/license/delete-many-license.args';
import { FindManyLicenseArgs } from 'src/@generated/prisma-nestjs-graphql/license/find-many-license.args';
import { License } from 'src/@generated/prisma-nestjs-graphql/license/license.model';
import { AffectedRows } from 'src/@generated/prisma-nestjs-graphql/prisma/affected-rows.output';
import { LicensesService } from './licenses.service';
import * as randomstring from 'randomstring';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateManyLicenseResponse } from './dto/create-many-license.response';
import { CreateManyLicenseInput } from './dto/create-many-license.input';
import { CreateManyLicenseArgs } from './dto/create-many-license.args';
import { Role } from 'src/@generated/prisma-nestjs-graphql/prisma/role.enum';

@Resolver()
export class LicensesResolver {
  constructor(private readonly licenseService: LicensesService) {}

  @Query(() => [License])
  @UseGuards(JwtAuthGuard)
  async licenses(@Args() args: FindManyLicenseArgs) {
    return this.licenseService.findManyLicense(args);
  }

  @Query(() => Number)
  @UseGuards(JwtAuthGuard)
  async totalLicenses() {
    return this.licenseService.totalLicenses();
  }

  @Mutation(() => AffectedRows)
  @UseGuards(JwtAuthGuard)
  async deleteManyLicense(@Args() args: DeleteManyLicenseArgs) {
    return this.licenseService.deleteManyLicense(args);
  }

  @Mutation(() => License)
  @UseGuards(JwtAuthGuard)
  async createLicense(@Args() args: CreateOneLicenseArgs) {
    args.data.licenseKey = randomstring.generate(64);
    switch (args.data.role) {
      case 'FAMILYANDFRIENDS':
      case 'LIFETIME':
        args.data.expirationDate = null;
        break;
      case 'RENEWAL': {
        const date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        args.data.expirationDate = date;
        break;
      }
    }
    return this.licenseService.createLicense(args);
  }

  @Mutation(() => CreateManyLicenseResponse)
  @UseGuards(JwtAuthGuard)
  async createManyLicense(@Args() args: CreateManyLicenseArgs) {
    const newData = [];
    const role: Role = Role[args.data.role];
    let expirationDate: Date | null;

    switch (args.data.role) {
      case 'FAMILYANDFRIENDS':
      case 'LIFETIME':
        expirationDate = null;
        break;
      case 'RENEWAL': {
        const date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        expirationDate = date;
        break;
      }
    }

    for (let i = 0; i < args.data.qty; i++) {
      newData.push({
        role,
        expirationDate,
        licenseKey: randomstring.generate(64),
      });
    }

    return this.licenseService.createManyLicense({
      data: newData,
    });
  }
}
