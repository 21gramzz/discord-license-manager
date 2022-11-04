import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/users.module';
import { LicensesModule } from './licenses/licenses.module';
import { AdminsModule } from './admins/admins.module';
import { AuthModule } from './auth/auth.module';
import { BotModule } from './bot/bot.module';
import { DiscordModule } from '@discord-nestjs/core';
import { join } from 'path';
import { DiscordConfigService } from './bot/discord-config.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    DiscordModule.forRootAsync({
      useClass: DiscordConfigService,
    }),
    BotModule,
    UsersModule,
    LicensesModule,
    AdminsModule,
    AuthModule,
  ],
  providers: [AppService, PrismaService],
})
export class AppModule {}
