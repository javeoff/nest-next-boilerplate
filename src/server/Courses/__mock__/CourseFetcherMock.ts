import { Injectable } from '@nestjs/common';

import { CourseFetcher } from '@server/Courses/services/CourseFetcher';
import { ICourses } from '@server/Courses/types/ICourses';

@Injectable()
export class CourseFetcherMock implements CourseFetcher {
  public getCourses(): ICourses {
    return {
      courses: [
        {
          id: '123',
          name: 'string',
          imageUrl: 'string',
          content: 'string',
        },
      ],
    };
  }
}
