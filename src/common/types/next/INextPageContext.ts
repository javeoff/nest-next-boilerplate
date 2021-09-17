import { NextPageContext } from 'next';
import { Store } from 'redux';

import { IRootState } from '@common/redux/store';
import { IBasePageResponse } from '@server/Common/types/IBasePageResponse';

/**
 * Контекст next-страницы.
 */
export type INextPageContext = NextPageContext & {
  store: Store<IRootState>;
  query: IBasePageResponse;
};
