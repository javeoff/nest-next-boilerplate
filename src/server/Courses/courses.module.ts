import { Module } from '@nestjs/common';

import { CourseFetcherMock } from '@server/Courses/__mock__/CourseFetcherMock';
import { CourseFetcher } from '@server/Courses/services/CourseFetcher';
import { CoursesController } from '@server/Courses/controllers/courses.controller';
import { CoursesApiController } from '@server/Courses/controllers/coursesApi.controller';

@Module({
  providers: [
    {
      provide: CourseFetcher,
      useClass: CourseFetcherMock,
    },
  ],
  controllers: [CoursesController, CoursesApiController],
  exports: [CourseFetcher],
})
export class CoursesModule {}
