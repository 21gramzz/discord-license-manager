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
    return this.licenseService.createLicense(args);
  }

  @Mutation(() => CreateManyLicenseResponse)
  @UseGuards(JwtAuthGuard)
  async createManyLicense(@Args() args: CreateManyLicenseArgs) {
    const newData = [];
    const role: Role = Role[args.data.role];
    const licenseKeys: string[] = [];

    for (let i = 0; i < args.data.qty; i++) {
      const licenseKey = randomstring.generate(64);
      licenseKeys.push(licenseKey);
      newData.push({
        role,
        licenseKey,
      });
    }
    await this.licenseService.createManyLicense({
      data: newData,
    });

    return { licenseKeys, role };
  }
}
