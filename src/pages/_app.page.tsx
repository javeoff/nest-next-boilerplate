import Head from 'next/head';

import { setStates, wrapper } from '@common/redux/store';
import { IS_SERVER } from '@common/utils/constants';
import { IAppContext } from '@common/types/next/IAppContext';
import { Feature } from '@common/enums/Feature';
import { IBasePageResponse } from '@server/Common/types/IBasePageResponse';
import { apiPage } from '@server/Common/api/ApiPage';
import { INextApp } from '@common/types/next/INextApp';

const App: INextApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>{pageProps.title}</title>
      <style>{pageProps.style}</style>
    </Head>
    <Component {...pageProps} />
  </>
);

App.getInitialProps = wrapper.getInitialAppProps((store) => async (context) => {
  const { Component, ctx } = context as IAppContext;

  let payload: IBasePageResponse;

  try {
    payload = IS_SERVER ? ctx.query : await apiPage.init(ctx.asPath as string);
  } catch {
    return {
      pageProps: {},
    };
  }

  if ('features' in payload) {
    // eslint-disable-next-line no-restricted-syntax
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
