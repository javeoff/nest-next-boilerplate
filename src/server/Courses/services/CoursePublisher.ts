import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Course } from '@server/Courses/entities/course.entity';
import { CoursePublishRequest } from '@server/Courses/dto/CoursePublishRequest';
import { ICourse } from '@server/Courses/types/ICourse';

@Injectable()
export class CoursePublisher {
  public constructor(
    @InjectRepository(Course)
    private coursesRepository: Repository<Course>,
  ) {}

  public async publish(dto: CoursePublishRequest): Promise<ICourse> {
    const course = new Course();

    course.name = dto.name;
    course.imageUrl = dto.imageUrl;
    course.content = dto.content;

    return await this.coursesRepository.save(course);
  }
}
