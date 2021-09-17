import { AnyObject } from 'immer/dist/types/types-internal';

import { IPageProps } from '@common/types/next/IPageProps';
import { Feature } from '@common/enums/Feature';

export interface IBasePageResponse<
  // eslint-disable-next-line @typescript-eslint/ban-types
  FeatureState extends { [key in Feature]?: AnyObject } = {},
  // eslint-disable-next-line @typescript-eslint/ban-types
  PageState extends Record<string, unknown> = {},
> {
  features: FeatureState;
  page: IPageProps & PageState;
}
