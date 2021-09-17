import { createSelector } from '@reduxjs/toolkit';

import { Feature } from '@common/enums/Feature';
import { getFeatureSelector } from '@common/redux/selectors/getFeatureSelector';

export const coursesSelector = getFeatureSelector(Feature.COURSES);

export const coursesStateSelector = createSelector(
  coursesSelector,
  (feature) => feature.state.courses,
);
