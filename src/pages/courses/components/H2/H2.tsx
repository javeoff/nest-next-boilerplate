import { FC } from 'react';

export const H2: FC = ({ children, ...props }) => (
  <h2 {...props}>{children}</h2>
);
