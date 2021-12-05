import {
  configureStore,
  EnhancedStore,
  Middleware,
  StateFromReducersMapObject,
} from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { StoreEnhancer } from 'redux';

import { commonSlice } from '@common/duck/slice';
import { Feature } from '@common/enums/Feature';
// TODO: HydrateAction ругается линтер
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
  enhancers: StoreEnhancer[] = [],
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
    enhancers,
  });

export const wrapper = createWrapper(() => initializeStore());
