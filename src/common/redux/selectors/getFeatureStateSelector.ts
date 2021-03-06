import { createSelector } from '@reduxjs/toolkit';

import { getFeatureSelector } from '@common/redux/selectors/getFeatureSelector';
import { IRootState } from '@common/redux/store';
import { Feature } from '@common/enums/Feature';
import { IFeatureState } from '@common/redux/types/IFeatureState';

export const getFeatureStateSelector = <FeatureName extends Feature>(
  feature: FeatureName,
): ((state: IRootState) => IFeatureState<FeatureName>) =>
  createSelector(getFeatureSelector(feature), (state) => state.state);
