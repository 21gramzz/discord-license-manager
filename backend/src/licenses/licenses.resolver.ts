import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { CreateOneLicenseArgs } from 'src/@generated/prisma-nestjs-graphql/license/create-one-license.args';
import { DeleteManyLicenseArgs } from 'src/@generated/prisma-nestjs-graphql/license/delete-many-license.args';
import { FindManyLicenseArgs } from 'src/@generated/prisma-nestjs-graphql/license/find-many-license.args';
import { License } from 'src/@generated/prisma-nestjs-graphql/license/license.model';
import { AffectedRows } from 'src/@generated/prisma-nestjs-graphql/prisma/affected-rows.output';
import { LicensesService } from './licenses.service';
import * as randomstring from 'randomstring';

@Resolver()
export class LicensesResolver {
  constructor(private readonly licenseService: LicensesService) {}

  @Query(() => [License])
  async licenses(@Args() args: FindManyLicenseArgs) {
    return this.licenseService.findManyLicense(args);
  }

  @Query(() => Number)
  async totalLicenses() {
    return this.licenseService.totalLicenses();
  }

  @Mutation(() => AffectedRows)
  async deleteManyLicense(@Args() args: DeleteManyLicenseArgs) {
    return this.licenseService.deleteManyLicense(args);
  }

  @Mutation(() => License)
  async createLicense(@Args() args: CreateOneLicenseArgs) {
    args.data.licenseKey = randomstring.generate(64);
    return this.licenseService.createLicense(args);
  }
}
