import { AppProps } from 'next/app';

import { EnhancedStore } from '@reduxjs/toolkit';

import { setStates, wrapper, IRootState } from '@common/redux/store';
import { IS_SERVER } from '@common/utils/constants';
import { IAppContext } from '@common/types/next/IAppContext';
import { Feature } from '@common/enums/Feature';
import { IBasePageResponse } from '@server/Common/types/IBasePageResponse';
import { apiPage } from '@server/Common/api/ApiPage';

const App = ({
  Component,
  pageProps,
}: AppProps & { reduxStore: EnhancedStore<IRootState> }): JSX.Element => (
  <Component {...pageProps} />
);

App.getInitialProps = wrapper.getInitialAppProps((store) => async (context) => {
  const { Component, ctx } = context as IAppContext;

  let payload: IBasePageResponse;

  try {
    payload = IS_SERVER ? ctx.query : await apiPage.init(ctx.asPath);
  } catch {
    return {
      pageProps: {},
    };
  }

  if ('features' in payload) {
    for (const feature of Object.keys(payload.features || {})) {
      const setState = setStates[feature as Feature];

      const state = payload.features[feature];

      store.dispatch(setState(state));
    }
  }

  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps({ ...ctx, store });
  }

  return {
    pageProps: {
      ...pageProps,
      ...payload.page,
    },
  };
});

export default wrapper.withRedux(App);
