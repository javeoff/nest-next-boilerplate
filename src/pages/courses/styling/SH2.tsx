import { H1 } from '@pages/courses/components/H1/H1';
import { styling } from '@common/utils/styling/styling';

export const SH2 = styling(H1)({
  isWarning: 'blueText',
})`
  color: green;
  
  .blueText {
    color: yellow;
  }
`;
