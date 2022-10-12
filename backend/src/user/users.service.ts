import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import { FindUniqueUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-unique-user.args';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findUniqueUser(args: FindUniqueUserArgs): Promise<User | null> {
    return this.prisma.user.findUnique({ ...args, include: { license: true } });
  }
}
