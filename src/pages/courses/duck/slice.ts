import { createFeatureSlice } from '@common/redux/utils/createFeatureSlice';
import { IBaseFeatureState } from '@common/redux/types/IBaseFeatureState';
import { ICourses } from '@server/Courses/types/ICourses';
import { Feature } from '@common/enums/Feature';
import { onCourseAdd } from '@pages/courses/duck/reducers/onCourseAdd';
import { courseAsyncActions } from '@pages/courses/duck/asyncActions';

export type ICoursesState = IBaseFeatureState<ICourses>;

export const coursesPageSlice = createFeatureSlice({
  name: Feature.COURSES,
  initialState: {
    state: {
      courses: [],
    },
  } as ICoursesState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(courseAsyncActions.createCourse.fulfilled, onCourseAdd);
  },
});
