import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', // Change this to your database type (mysql, postgres, etc.)
      database: 'database.sqlite', // Path to SQLite file
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Auto-load entities
      synchronize: true, // Auto-create tables (disable in production)
    }),
    UsersModule, // Add the UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
