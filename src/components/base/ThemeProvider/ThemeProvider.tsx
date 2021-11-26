import { FC } from 'react';
import {
  createGlobalStyle,
  ThemeProvider as BaseThemeProvider,
} from 'styled-components';

import { TextColor } from '@common/enums/ui/TextColor';
import { AccentColor } from '@common/enums/ui/AccentColor';
import { BaseColor } from '@common/enums/ui/BaseColor';

const defaultTheme = {
  colors: {
    text: TextColor,
    base: BaseColor,
    accent: AccentColor,
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fffffe;
    margin: 0;
  }
`;

export type ITheme = typeof defaultTheme;

export const ThemeProvider: FC = ({ children }) => (
  <BaseThemeProvider theme={{ ...defaultTheme }}>
    <GlobalStyle />
    {children}
  </BaseThemeProvider>
);
