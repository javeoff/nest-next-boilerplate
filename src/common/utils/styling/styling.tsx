import { FC, PropsWithChildren } from 'react';

import { IS_SERVER } from '@common/utils/constants';
import { getStylingComponentId } from '@common/utils/styling/getStylingComponentsId';
import { generateCss } from '@common/utils/styling/generateCss';
import { createStylingComponent } from '@common/utils/styling/createStylingComponent';

type IStylingProps = PropsWithChildren<{
  [key: string]: unknown;
  className?: string;
}>;

export const styling =
  <
    Options extends Record<string, string> = Record<string, string>,
    Props extends IStylingProps = IStylingProps,
  >(
    component: FC,
  ) =>
  (options: Options) =>
  (css: TemplateStringsArray) =>
  (props: Props): JSX.Element => {
    if (IS_SERVER) {
      return <></>;
    }

    const { prefix: routePrefix } = getStylingComponentId();

    generateCss(css, routePrefix);

    return createStylingComponent(component, options, {
      ...props,
      className: `${routePrefix}${
        props.className ? ' ' + props.className : ''
      }`,
    });
  };
