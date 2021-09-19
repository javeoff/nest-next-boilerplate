import { AppProps } from 'next/app';

import { IAppInitialProps } from '@common/types/next/IAppInitialProps';
import { IBaseNextPage } from '@common/types/next/IBaseNextPage';

/**
 * Пропсы для компонента _app.
 */
export type IAppProps = Omit<AppProps, 'pageProps' | 'Component'> &
  IAppInitialProps & {
    Component: IBaseNextPage;
  };
