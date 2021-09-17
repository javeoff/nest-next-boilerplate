import { AppContext } from 'next/app';

import { IBaseNextPage } from '@common/types/next/IBaseNextPage';
import { INextPageContext } from '@common/types/next/INextPageContext';

export type IAppContext = Omit<AppContext, 'Component' | 'ctx'> & {
  Component: IBaseNextPage;
  ctx: INextPageContext;
};
