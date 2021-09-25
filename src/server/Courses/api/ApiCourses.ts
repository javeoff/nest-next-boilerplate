import { ApiServiceBase } from '@server/Common/api/ApiServiceBase';
import { TApiFromController } from '@common/types/TApiFromController';
import { CoursesController } from '@server/Courses/controllers/courses.controller';
import { CoursePublishRequest } from '@server/Courses/dto/CoursePublishRequest';
import { CoursesRoute } from '@server/Courses/enums/CoursesRoute';
import { ICourse } from '@server/Courses/types/ICourse';

export class ApiCourses
  extends ApiServiceBase
  implements TApiFromController<CoursesController>
{
  public constructor() {
    super();
  }

  public createCourse(dto: CoursePublishRequest): Promise<ICourse> {
    return this.post(CoursesRoute.CREATE, dto);
  }
}

export const apiCourses = new ApiCourses();
