import { Test, TestingModule } from '@nestjs/testing';
import { AdminsResolver } from './admins.resolver';
import { AdminsService } from './admins.service';
import { Admin } from '../@generated/prisma-nestjs-graphql/admin/admin.model';

const oneAdmin: Admin = {
  id: 1,
  email: 'test@example.com',
  password: 'password',
};

describe('AdminsResolver', () => {
  let adminResolver: AdminsResolver;
  let adminsService: jest.Mocked<AdminsService>;

  const mockAdminService = () => ({
    findUniqueAdmin: jest.fn(),
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AdminsResolver,
        {
          provide: AdminsService,
          useFactory: mockAdminService,
        },
      ],
    }).compile();

    adminResolver = module.get(AdminsResolver);
    adminsService = module.get(AdminsService);
  });

  it('should be defined', () => {
    expect(adminResolver).toBeDefined();
  });

  describe('admin', () => {
    it('should return an admin', async () => {
      adminsService.findUniqueAdmin.mockResolvedValue(oneAdmin);
      expect(
        await adminResolver.admin({ where: { email: oneAdmin.email } }),
      ).toEqual(oneAdmin);
    });
  });
});
