import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaService } from './prisma.service';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { LicensesModule } from './licenses/licenses.module';
import { AdminsModule } from './admins/admins.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UsersModule,
    LicensesModule,
    AdminsModule,
    AuthModule,
  ],
  providers: [AppService, PrismaService],
})
export class AppModule {}
