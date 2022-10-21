import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import { FindUniqueUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-unique-user.args';
import { CreateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/create-one-user.args';
import { UpdateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/update-one-user.args';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findUniqueUser(args: FindUniqueUserArgs): Promise<User> {
    const user = await this.prisma.user.findUnique({
      ...args,
      include: { license: true },
    });
    if (!user) {
      throw new NotFoundException('Could not find user');
    } else {
      return user;
    }
  }

  async createUser(args: CreateOneUserArgs): Promise<User> {
    return this.prisma.user.create({ ...args, include: { license: true } });
  }

  async updateOneUser(args: UpdateOneUserArgs): Promise<User> {
    return this.prisma.user.update({ ...args, include: { license: true } });
  }
}
