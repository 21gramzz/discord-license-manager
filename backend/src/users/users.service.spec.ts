import { Test, TestingModule } from '@nestjs/testing';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import { PrismaService } from 'src/prisma.service';
import { UsersService } from './users.service';

const oneUser: User = {
  id: 1,
  userName: 'test',
  discordId: '12345',
  discordAvatarId: '12345',
  createdAt: new Date(),
  licenseKey:
    'cU0Gn0yUdpE0n51vz6JZ30Cw21ONW0F2TJi59TH9r4XeI8qqxlBqcnQnP26d5KH0',
};

describe('UsersService', () => {
  let usersService: UsersService;
  let prismaService: jest.MaybeMockedDeep<PrismaService>;

  const mockPrismaService = () => ({
    user: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: PrismaService,
          useFactory: mockPrismaService,
        },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
    prismaService = module.get(PrismaService);
  });

  it('should be defined', () => {
    expect(usersService).toBeDefined();
  });

  describe('findUniqueUser', () => {
    it('should return a user', async () => {
      prismaService.user.findUnique.mockResolvedValue(oneUser);
      expect(
        await usersService.findUniqueUser({
          where: { licenseKey: oneUser.licenseKey },
        }),
      ).toEqual(oneUser);
    });
  });

  describe('createUser', () => {
    it('should return the newly created user', async () => {
      prismaService.user.create.mockResolvedValue(oneUser);
      expect(
        await usersService.createUser({
          data: {
            ...oneUser,
            license: {
              connect: {
                licenseKey: oneUser.licenseKey,
              },
            },
          },
        }),
      ).toEqual(oneUser);
    });
  });
});
