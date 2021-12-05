import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Course } from '@server/Courses/entities/course.entity';
import { ICourse } from '@server/Courses/types/ICourse';

@Injectable()
export class CourseFetcher {
  public constructor(
    @InjectRepository(Course)
    private coursesRepository: Repository<Course>,
  ) {}

  public async fetch(): Promise<ICourse[]> {
    return this.coursesRepository.find();
  }
}
