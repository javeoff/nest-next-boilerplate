import { RenderModule } from 'nest-next';
import Next from 'next';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import { ConfigService } from '@server/Config/services/config.service';
import { DatabaseName } from '@server/Config/enums/DatabaseName';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get(DatabaseName.DB_HOST),
        port: Number(configService.get(DatabaseName.DB_PORT)),
        username: configService.get(DatabaseName.DB_USERNAME),
        password: configService.get(DatabaseName.DB_PASSWORD),
        database: configService.get(DatabaseName.DB_DATABASE),
        entities: ['src/server/**/*.entity.ts'],
        synchronize: false,
        migrationsRun: false,
        logging: false,
        namingStrategy: new SnakeNamingStrategy(),
        autoLoadEntities: false,
      }),
      inject: [ConfigService],
    }),
    RenderModule.forRootAsync(
      Next({ dev: process.env.NODE_ENV !== 'production' }),
      { viewsDir: '' },
    ),
    ConfigModule,
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
