import { Test, TestingModule } from '@nestjs/testing';
import { LicensesResolver } from './licenses.resolver';
import { LicensesService } from './licenses.service';
import { License } from '../@generated/prisma-nestjs-graphql/license/license.model';

const oneLicense: License = {
  id: 1,
  role: 'RENEWAL',
  licenseKey:
    'cU0Gn0yUdpE0n51vz6JZ30Cw21ONW0F2TJi59TH9r4XeI8qqxlBqcnQnP26d5KH0',
  createdAt: new Date(),
  expirationDate: new Date(),
  isActivated: false,
};

describe('LicensesResolver', () => {
  let licenseResolver: LicensesResolver;
  let licensesService: jest.Mocked<LicensesService>;

  const mockLicensesService = () => ({
    findManyLicense: jest.fn(),
    createLicense: jest.fn(),
    createManyLicense: jest.fn(),
    deleteManyLicense: jest.fn(),
    totalLicenses: jest.fn(),
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LicensesResolver,
        {
          provide: LicensesService,
          useFactory: mockLicensesService,
        },
      ],
    }).compile();

    licenseResolver = module.get(LicensesResolver);
    licensesService = module.get(LicensesService);
  });

  it('should be defined', () => {
    expect(licenseResolver).toBeDefined();
  });

  describe('lincenses', () => {
    it('should return an array license', async () => {
      licensesService.findManyLicense.mockResolvedValue([oneLicense]);
      expect(
        await licensesService.findManyLicense({
          where: { licenseKey: { equals: oneLicense.licenseKey } },
        }),
      ).toEqual([oneLicense]);
    });
  });

  describe('totalLicenses', () => {
    it('should return a count of the total licenses', async () => {
      licensesService.totalLicenses.mockResolvedValue(1);
      expect(await licensesService.totalLicenses()).toEqual(1);
    });
  });

  describe('deleteManyLicense', () => {
    it('should return a count of the deleted licenses', async () => {
      licensesService.deleteManyLicense.mockResolvedValue({ count: 1 });
      expect(
        await licensesService.deleteManyLicense({
          where: { licenseKey: { equals: oneLicense.licenseKey } },
        }),
      ).toEqual({ count: 1 });
    });
  });

  describe('createLicense', () => {
    it('should return the new license created', async () => {
      licensesService.createLicense.mockResolvedValue(oneLicense);
      expect(
        await licensesService.createLicense({
          data: { licenseKey: oneLicense.licenseKey, role: oneLicense.role },
        }),
      ).toEqual(oneLicense);
    });
  });

  describe('createManyLicense', () => {
    it('should return the count of licenses created', async () => {
      licensesService.createManyLicense.mockResolvedValue({ count: 1 });
      expect(
        await licensesService.createManyLicense({
          data: [{ role: oneLicense.role, licenseKey: oneLicense.licenseKey }],
        }),
      ).toEqual({ count: 1 });
    });
  });
});
