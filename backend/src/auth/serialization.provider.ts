import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthSerializer extends PassportSerializer {
  constructor(private readonly usersService: UsersService) {
    super();
  }
  serializeUser(user: User, done: (err: Error, user: { id: number }) => void) {
    done(null, { id: user.id });
  }

  async deserializeUser(
    payload: { id: number },
    done: (err: Error, user: Omit<User, 'id'>) => void,
  ) {
    const user = await this.usersService.findUniqueUser({
      where: { id: payload.id },
    });
    done(null, user);
  }
}
