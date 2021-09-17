import { IBasePageResponse } from '@server/Common/types/IBasePageResponse';
import { ICourses } from '@server/Courses/types/ICourses';
import { Feature } from '@common/enums/Feature';

export type ICoursesPageResponse = IBasePageResponse<{
  [Feature.COURSES]: ICourses;
}>;
