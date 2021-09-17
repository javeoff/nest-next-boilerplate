import { NextPage } from 'next';
import { ComponentType } from 'react';

import { INextPageContext } from '@common/types/next/INextPageContext';
import { IPageProps } from '@common/types/next/IPageProps';

/**
 * Описывает страницу. Каждая новая страница должна быть этого типа.
 */
export type IBaseNextPage<
  Props = Record<string, unknown>,
  PageProps = IPageProps & Props,
> = ComponentType<PageProps> &
  Omit<NextPage<PageProps>, 'getInitialProps'> & {
    withoutLayout?: boolean;
  } & {
    getInitialProps?(
      context: INextPageContext,
    ): Partial<PageProps> | Promise<Partial<PageProps>>;
  };
