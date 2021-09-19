import { FC, PropsWithChildren } from 'react';

export const createStylingComponent = <
  Options extends Record<string, string> = Record<string, string>,
  Props extends PropsWithChildren<{
    [key: string]: unknown;
    className?: string;
  }> = PropsWithChildren<{ [key: string]: unknown }>,
>(
  Component: FC,
  options: Options,
  props: Props,
): JSX.Element => (
  <Component
    {...props}
    className={
      (props?.className ? `${props.className} ` : '') +
      Object.keys(props)
        .filter(
          (paramName) =>
            props[paramName] && typeof props[paramName] === 'boolean',
        )
        .map((paramName) => (props[paramName] ? options[paramName] : ''))
        .join(' ')
    }
  >
    {props.children}
  </Component>
);
