import { ConnectedProps } from 'react-redux';

import { IRootState } from '@common/redux/store';
import { coursesStateSelector } from '@pages/courses/duck/selectors';
import { withFeatureState } from '@common/redux/hocs/withFeatureState';
import { Feature } from '@common/enums/Feature';
import { coursesPageSlice } from '@pages/courses/duck/slice';
import { courseAsyncActions } from '@pages/courses/duck/asyncActions';

export const withCoursesPageState = withFeatureState({
  feature: Feature.COURSES,
  mapStateToProps: (state: IRootState) => ({
    courses: coursesStateSelector(state),
  }),
  mapDispatchToProps: {
    ...coursesPageSlice.actions,
    ...courseAsyncActions,
  },
});

export type IWithCoursesPageState = ConnectedProps<typeof withCoursesPageState>;
