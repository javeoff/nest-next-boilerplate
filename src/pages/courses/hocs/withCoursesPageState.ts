import { connect, ConnectedProps } from 'react-redux';

import { IRootState } from '@common/redux/store';
import { coursesStateSelector } from '@pages/courses/duck/selectors';

const mapStateToProps = (state: IRootState) => ({
  courses: coursesStateSelector(state),
});

const mapDispatchToProps = {};

export const withCoursesPageState = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export type IWithCoursesPageState = ConnectedProps<typeof withCoursesPageState>;
