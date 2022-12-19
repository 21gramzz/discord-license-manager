import { Test, TestingModule } from '@nestjs/testing';
import { LicensesService } from './licenses.service';
import { License } from 'src/@generated/prisma-nestjs-graphql/license/license.model';
import { PrismaService } from 'src/prisma.service';

const oneLicense: License = {
  id: 1,
  role: 'RENEWAL',
  licenseKey: '',
  createdAt: new Date(),
  expirationDate: new Date(),
  isActivated: false,
};

describe('LicensesService', () => {
  let service: LicensesService;
  let prismaService: jest.MaybeMockedDeep<PrismaService>;

  const mockPrismaService = () => ({
    license: {
      findUnique: jest.fn(),
      findMany: jest.fn(),
      create: jest.fn(),
      createMany: jest.fn(),
      deleteMany: jest.fn(),
      update: jest.fn(),
      count: jest.fn(),
    },
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LicensesService,
        {
          provide: PrismaService,
          useFactory: mockPrismaService,
        },
      ],
    }).compile();

    prismaService = module.get(PrismaService);
    service = module.get(LicensesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findUniqueLicense', () => {
    it('should return a license', async () => {
      prismaService.license.findUnique.mockResolvedValue(oneLicense);
      expect(
        await service.findUniqueLicense({
          where: { licenseKey: oneLicense.licenseKey },
        }),
      ).toEqual(oneLicense);
    });
  });

  describe('findManyLicense', () => {
    it('should return an array license', async () => {
      prismaService.license.create.mockResolvedValue(oneLicense);
      expect(
        await service.createLicense({
          data: { licenseKey: oneLicense.licenseKey, role: oneLicense.role },
        }),
      ).toEqual(oneLicense);
    });
  });

  describe('createLicense', () => {
    it('should return the new license created', async () => {
      prismaService.license.create.mockResolvedValue(oneLicense);
      expect(
        await service.createLicense({
          data: { licenseKey: oneLicense.licenseKey, role: oneLicense.role },
        }),
      ).toEqual(oneLicense);
    });
  });

  describe('updateOneLicense', () => {
    it('should return an updated license', async () => {
      prismaService.license.update.mockResolvedValue(oneLicense);
      expect(
        await service.updateOneLicense({
          where: { licenseKey: oneLicense.licenseKey },
          data: { licenseKey: { set: oneLicense.licenseKey } },
        }),
      ).toEqual(oneLicense);
    });
  });

  describe('createManyLicense', () => {
    it('should return the count of licenses created', async () => {
      prismaService.license.createMany.mockResolvedValue({ count: 1 });
      expect(
        await service.createManyLicense({
          data: [{ role: oneLicense.role, licenseKey: oneLicense.licenseKey }],
        }),
      ).toEqual({ count: 1 });
    });
  });

  describe('deleteManyLicense', () => {
    it('should return a count of the deleted licenses', async () => {
      prismaService.license.deleteMany.mockResolvedValue({ count: 1 });
      expect(
        await service.deleteManyLicense({
          where: { licenseKey: { equals: oneLicense.licenseKey } },
        }),
      ).toEqual({ count: 1 });
    });
  });

  describe('totalLicenses', () => {
    it('should return a count of the total licenses', async () => {
      prismaService.license.count.mockResolvedValue(1);
      expect(await service.totalLicenses()).toEqual(1);
    });
  });
});
