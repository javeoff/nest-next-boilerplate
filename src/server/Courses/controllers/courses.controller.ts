import { Controller } from '@nestjs/common';

import { ICourses } from '@server/Courses/types/ICourses';
import { CourseFetcher } from '@server/Courses/services/CourseFetcher';
import { ICoursesPageResponse } from '@server/Courses/types/ICoursesPageResponse';
import { Page } from '@server/Common/decorators/Page';
import { PageName } from '@common/enums/PageName';
import { ApiGet } from '@server/Common/decorators/ApiGet';
import { CoursesRoute } from '@server/Courses/enums/CoursesRoute';

@Controller()
export class CoursesController {
  public constructor(private readonly courseFetcher: CourseFetcher) {}

  @Page(PageName.COURSES)
  public async index(): Promise<ICoursesPageResponse> {
    const [courses] = await Promise.all([this.courseFetcher.getCourses()]);

    return {
      page: {
        title: 'Courses page',
      },
      features: {
        courses,
      },
    };
  }

  @ApiGet(CoursesRoute.BASE)
  public get(): ICourses {
    return this.courseFetcher.getCourses();
  }
}
