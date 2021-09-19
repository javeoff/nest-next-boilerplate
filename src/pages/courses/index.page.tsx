import { NextPage } from 'next';

import { useState } from 'react';

import {
  IWithCoursesPageState,
  withCoursesPageState,
} from '@pages/courses/hocs/withCoursesPageState';
import { styling } from '@common/utils/style/styling';
import { H1 } from '@pages/courses/components/H1/H1';

const Courses: NextPage<IWithCoursesPageState> = ({ courses }) => {
  const [isWarning, setIsWarning] = useState<boolean>(false);

  return (
    <>
      <SH1
        isWarning={isWarning}
        className={'h1text'}
        onClick={() => setIsWarning(!isWarning)}
      >
        Courses
      </SH1>
      <SH2
        isWarning={isWarning}
        className={'h2text'}
        onClick={() => setIsWarning(!isWarning)}
      >
        Courses 2
      </SH2>
      <pre>{JSON.stringify(courses)}</pre>
    </>
  );
};

const SH1 = styling(H1)({
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

const SH2 = styling(H1)({
  isWarning: 'blueText',
})`
  color: green;
  
  .blueText {
    color: yellow;
  }
`;

export default withCoursesPageState(Courses);
