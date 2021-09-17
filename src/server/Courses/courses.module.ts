import { Module } from '@nestjs/common';

import { CourseFetcherMock } from '@server/Courses/__mock__/CourseFetcherMock';
import { CourseFetcher } from '@server/Courses/services/CourseFetcher';
import { CoursesController } from '@server/Courses/controllers/courses.controller';

@Module({
  providers: [
    {
      provide: CourseFetcher,
      useClass: CourseFetcherMock,
    },
  ],
  controllers: [CoursesController],
  exports: [CourseFetcher],
})
export class CoursesModule {}
