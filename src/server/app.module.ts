import { Module } from '@nestjs/common';

import { ConfigModule } from '@server/Config/config.module';
import { AppController } from '@server/app.controller';
import { CoursesModule } from '@server/Courses/courses.module';
import { SystemErrorModule } from '@server/SystemError/SystemErrorModule';

@Module({
  imports: [ConfigModule, CoursesModule, SystemErrorModule],
  controllers: [AppController],
})
export class AppModule {}
