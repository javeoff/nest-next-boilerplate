import {
  configureStore,
  EnhancedStore,
  Middleware,
  StateFromReducersMapObject,
} from '@reduxjs/toolkit';

import { createWrapper } from 'next-redux-wrapper';

import { commonSlice } from '@common/duck/slice';
import { Feature } from '@common/enums/Feature';
import { coursesPageSlice } from '@pages/courses/duck/slice';

const reducer = {
  [commonSlice.name]: commonSlice.reducer,
  [Feature.COURSES]: coursesPageSlice.reducer,
};

export const setStates = {
  [Feature.COURSES]: coursesPageSlice.actions.setState,
};

export type IRootState = StateFromReducersMapObject<typeof reducer>;

export const initializeStore = (
  preloadedState?: IRootState,
  middlewares: Middleware[] = [],
): EnhancedStore<IRootState> =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: true,
        // Отключена проверка осознанно - для того, чтобы пробрасывать инсансы ошибок в action'ах
        serializableCheck: false,
      }).prepend(...middlewares),
    preloadedState,
  });

export const wrapper = createWrapper(() => initializeStore());
