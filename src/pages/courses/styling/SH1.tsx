import { H1 } from '@pages/courses/components/H1/H1';
import { styling } from '@common/utils/styling/styling';

export const SH1 = styling(H1)({
  isWarning: 'redText',
})`
    color: red;
  
    .h1text {
    opacity: 0.5;
    }
    
    .redText {
      color: orange;
    }
  
    .blueText {
      color: green;
    }
`;
