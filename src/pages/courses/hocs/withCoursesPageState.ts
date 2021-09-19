import { ConnectedProps } from 'react-redux';

import { IRootState } from '@common/redux/store';
import { coursesStateSelector } from '@pages/courses/duck/selectors';
import { withFeatureState } from '@common/redux/hocs/withFeatureState';
import { Feature } from '@common/enums/Feature';

export const withCoursesPageState = withFeatureState({
  feature: Feature.COURSES,
  mapStateToProps: (state: IRootState) => ({
    courses: coursesStateSelector(state),
  }),
  mapDispatchToProps: {},
});

export type IWithCoursesPageState = ConnectedProps<typeof withCoursesPageState>;
