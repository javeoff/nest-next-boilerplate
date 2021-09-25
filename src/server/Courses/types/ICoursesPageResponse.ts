import { IBasePageResponse } from '@server/Common/types/IBasePageResponse';
import { Feature } from '@common/enums/Feature';
import { ICourses } from '@server/Courses/types/ICourses';

export type ICoursesPageResponse = IBasePageResponse<{
  [Feature.COURSES]: ICourses;
}>;
