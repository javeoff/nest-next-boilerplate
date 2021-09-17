import { createSelector } from '@reduxjs/toolkit';

import { getFeatureSelector } from '@common/redux/selectors/getFeatureSelector';

export const commonSelector = getFeatureSelector('common');

export const messageSelector = createSelector(
  commonSelector,
  ({ message }) => message,
);
