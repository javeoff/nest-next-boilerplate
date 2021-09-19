import { IPageProps } from '@common/types/next/IPageProps';

/**
 * Начальные пропсы для компонента _app, приходящие из getInitialProps.
 */
export interface IAppInitialProps {
  /**
   * Пропсы, необходимые для отрисовки страницы.
   */
  pageProps: IPageProps;
}
