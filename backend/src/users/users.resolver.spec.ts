import { Test, TestingModule } from '@nestjs/testing';
import { UsersResolver } from './users.resolver';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
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

describe('UsersResolver', () => {
  let usersResolver: UsersResolver;
  let usersService: jest.MaybeMockedDeep<UsersService>;

  const mockUsersService = () => ({
    findUniqueUser: jest.fn(),
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersResolver,
        {
          provide: UsersService,
          useFactory: mockUsersService,
        },
      ],
    }).compile();

    usersResolver = module.get<UsersResolver>(UsersResolver);
    usersService = module.get(UsersService);
  });

  it('should be defined', () => {
    expect(usersResolver).toBeDefined();
  });

  describe('user', () => {
    it('should return a user', async () => {
      usersService.findUniqueUser.mockResolvedValue(oneUser);
      expect(
        await usersResolver.user({
          req: {
            user: oneUser,
          },
        }),
      ).toEqual(oneUser);
    });
  });
});
