import { createAsyncThunk } from '@reduxjs/toolkit';

import { Feature } from '@common/enums/Feature';
import { apiCourses } from '@server/Courses/api/ApiCourses';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type,@typescript-eslint/explicit-module-boundary-types
export const courseAsyncActions = {
  createCourse: createAsyncThunk(
    `${Feature.COURSES}/create`,
    apiCourses.createCourse.bind(apiCourses),
  ),
};
