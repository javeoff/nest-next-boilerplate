import { Body, Controller } from '@nestjs/common';

import { CourseFetcher } from '@server/Courses/services/CourseFetcher';
import { ICoursesPageResponse } from '@server/Courses/types/ICoursesPageResponse';
import { PageName } from '@common/enums/PageName';
import { Page } from '@server/Common/decorators/Page';
import { CoursePublishRequest } from '@server/Courses/dto/CoursePublishRequest';
import { CoursePublisher } from '@server/Courses/services/CoursePublisher';
import { CoursesRoute } from '@server/Courses/enums/CoursesRoute';
import { ICourse } from '@server/Courses/types/ICourse';
import { ApiPost } from '@server/Common/decorators/ApiPost';

@Controller()
export class CoursesController {
  public constructor(
    private readonly courseFetcher: CourseFetcher,
    private readonly coursePublisher: CoursePublisher,
  ) {}

  @Page(PageName.COURSES)
  public async index(): Promise<ICoursesPageResponse> {
    const [courses] = await Promise.all([this.courseFetcher.fetch()]);

    return {
      page: {
        title: 'Courses page',
        style: `body {background-color: #eee;}`,
      },
      features: {
        courses: {
          courses,
        },
      },
    };
  }

  @ApiPost(CoursesRoute.CREATE)
  public async createCourse(
    @Body() body: CoursePublishRequest,
  ): Promise<ICourse> {
    return await this.coursePublisher.publish(body);
  }
}
