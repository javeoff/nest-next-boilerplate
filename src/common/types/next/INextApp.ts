import { FC } from 'react';

import { IAppProps } from '@common/types/next/IAppProps';
import { IAppInitialProps } from '@common/types/next/IAppInitialProps';
import { IAppContext } from '@common/types/next/IAppContext';

/**
 * Описывает компонент _app.
 */
export type INextApp = FC<IAppProps> & {
  getInitialProps?(ctx: IAppContext): Promise<IAppInitialProps>;
};
