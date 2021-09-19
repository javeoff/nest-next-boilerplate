import { Controller, Get } from '@nestjs/common';

import { PageName } from '@common/enums/PageName';
import { CourseFetcher } from '@server/Courses/services/CourseFetcher';
import { ICourses } from '@server/Courses/types/ICourses';

@Controller(PageName.API_COURSES)
export class CoursesApiController {
  public constructor(private readonly courseFetcher: CourseFetcher) {}

  @Get()
  public get(): ICourses {
    return this.courseFetcher.getCourses();
  }
}
