import { WritableDraft } from 'immer/dist/types/types-external';

import { ICoursesState } from '@pages/courses/duck/slice';

export type TCoursesAsyncReducer<Payload, Args = never> = (
  draft: WritableDraft<ICoursesState>,
  action: { payload: Payload; meta: { arg: Args } },
) => void;
