import styled, { css } from 'styled-components';

export const SH1 = styled.h1<{ isWarning?: boolean }>`
  font-size: 24px;
  ${({ isWarning }) =>
    isWarning &&
    css`
      color: red;
    `}
`;
