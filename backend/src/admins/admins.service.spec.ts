import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma.service';
import { AdminsService } from './admins.service';
import { Admin } from '@prisma/client';

const oneAdmin: Admin = {
  id: 1,
  email: 'test@example.com',
  password: 'password',
};

describe('AdminsService', () => {
  let service: AdminsService;
  let prismaService;

  const mockPrismaService = () => ({
    admin: { findUnique: jest.fn() },
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AdminsService,
        {
          provide: PrismaService,
          useFactory: mockPrismaService,
        },
      ],
    }).compile();

    prismaService = module.get<PrismaService>(PrismaService);
    service = module.get<AdminsService>(AdminsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findUniqueAdmint', () => {
    it('should return an admin', async () => {
      prismaService.admin.findUnique.mockResolvedValue(oneAdmin);
      expect(
        await service.findUniqueAdmin({
          where: { email: oneAdmin.email },
        }),
      ).toEqual(oneAdmin);
    });
  });
});
