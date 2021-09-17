import { NextPage } from 'next';

import { IWithCoursesPageState } from '@pages/courses/hocs/withCoursesPageState';

const Courses: NextPage<IWithCoursesPageState> = ({ courses }) => (
  <h1>{JSON.stringify(courses)}</h1>
);

export default Courses;
