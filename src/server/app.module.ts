import { Module } from '@nestjs/common';

import { ConfigModule } from '@server/Config/config.module';
import { AppController } from '@server/app.controller';
import { CoursesModule } from '@server/Courses/courses.module';

@Module({
  imports: [ConfigModule, CoursesModule],
  controllers: [AppController],
})
export class AppModule {}
