import { TCoursesAsyncReducer } from '@pages/courses/duck/types/TCoursesAsyncReducer';
import { ICourse } from '@server/Courses/types/ICourse';
import { CoursePublishRequest } from '@server/Courses/dto/CoursePublishRequest';

export const onCourseAdd: TCoursesAsyncReducer<ICourse, CoursePublishRequest> =
  (draft, { payload }) => {
    draft.state.courses = [...draft.state.courses, payload];
  };
