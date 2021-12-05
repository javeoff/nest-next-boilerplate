import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CourseFetcher } from '@server/Courses/services/CourseFetcher';
import { CoursesController } from '@server/Courses/controllers/courses.controller';
import { Course } from '@server/Courses/entities/course.entity';
import { CoursePublisher } from '@server/Courses/services/CoursePublisher';

@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  providers: [CourseFetcher, CoursePublisher],
  controllers: [CoursesController],
  exports: [TypeOrmModule],
})
export class CoursesModule {}
