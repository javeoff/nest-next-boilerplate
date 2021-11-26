import styled, { css } from 'styled-components';

export const SH2 = styled.h2<{ isWarning?: boolean }>`
  font-size: 12px;
  ${({ isWarning }) =>
    isWarning &&
    css`
      color: red;
    `}
`;
