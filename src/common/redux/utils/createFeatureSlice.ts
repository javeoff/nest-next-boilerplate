import {
  createSlice,
  CreateSliceOptions,
  Draft,
  PayloadAction,
  Slice,
} from '@reduxjs/toolkit';
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice';

import { IBaseFeatureState } from '@common/redux/types/IBaseFeatureState';

type TSetState = (
  draft: Draft<IBaseFeatureState>,
  action: PayloadAction<IBaseFeatureState['state']>,
) => void;

export const createFeatureSlice = <
  State extends IBaseFeatureState,
  CaseReducers extends SliceCaseReducers<State> = SliceCaseReducers<State>,
  Name extends string = string,
>(
  options: CreateSliceOptions<State, CaseReducers, Name>,
): Slice<State, CaseReducers & { setState: TSetState }, Name> =>
  createSlice<State, CaseReducers & { setState: TSetState }, Name>({
    ...options,
    reducers: {
      ...options.reducers,
      setState: (draft, action: PayloadAction<IBaseFeatureState['state']>) => {
        draft.state = action.payload;
      },
    },
  });
