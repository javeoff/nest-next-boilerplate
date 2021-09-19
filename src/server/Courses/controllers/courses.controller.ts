import { Controller } from '@nestjs/common';

import { CourseFetcher } from '@server/Courses/services/CourseFetcher';
import { ICoursesPageResponse } from '@server/Courses/types/ICoursesPageResponse';
import { PageName } from '@common/enums/PageName';
import { Page } from '@server/Common/decorators/Page';

@Controller()
export class CoursesController {
  public constructor(private readonly courseFetcher: CourseFetcher) {}

  @Page(PageName.COURSES)
  public async index(): Promise<ICoursesPageResponse> {
    const [courses] = await Promise.all([this.courseFetcher.getCourses()]);

    return {
      page: {
        title: 'Courses page',
        style: `body {background-color: #eee;}`,
      },
      features: {
        courses,
      },
    };
  }
}
