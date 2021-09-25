import { Injectable } from '@nestjs/common';

import { ICourses } from '@server/Courses/types/ICourses';

@Injectable()
export class CourseFetcherMock {
  public getCourses(): ICourses {
    return {
      courses: [
        {
          id: 123,
          name: 'string',
          imageUrl: 'string',
          content: 'string',
        },
      ],
    };
  }
}
