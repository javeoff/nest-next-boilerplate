import { Injectable } from '@nestjs/common';

import { ICourses } from '@server/Courses/types/ICourses';

@Injectable()
export abstract class CourseFetcher {
  public abstract getCourses(): ICourses;
}
