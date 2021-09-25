import { NextPage } from 'next';

import { useState } from 'react';

import {
  IWithCoursesPageState,
  withCoursesPageState,
} from '@pages/courses/hocs/withCoursesPageState';
import { SH2 } from '@pages/courses/styling/SH2';
import { SH1 } from '@pages/courses/styling/SH1';

const Courses: NextPage<IWithCoursesPageState> = ({
  courses,
  createCourse,
}) => {
  const [isWarning, setIsWarning] = useState<boolean>(false);
  const [courseName, setCourseName] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const onAddCourseClick = (): void => {
    const course = {
      name: courseName,
      imageUrl,
      content,
    };

    void createCourse(course);
  };

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
      <div>
        {JSON.stringify(courses)}
        {courses &&
          courses.map((course) => (
            <div>
              <div>
                <span>name: {course.name}</span>
                <span>id: {course.id}</span>
              </div>
              <img width={20} height={20} src={course.imageUrl} alt={''} />
              <div>{course.content}</div>
            </div>
          ))}
      </div>
      <div>
        <input
          placeholder={'course name'}
          type='text'
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder={'image url'}
          type='text'
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <div>
        <textarea
          placeholder={'content'}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <button onClick={onAddCourseClick}>Добавить новый курс</button>
    </>
  );
};

export default withCoursesPageState(Courses);
