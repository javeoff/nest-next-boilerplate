import { FC } from 'react';

export const H1: FC = ({ children, ...props }) => (
  <h1 {...props}>{children}</h1>
);
