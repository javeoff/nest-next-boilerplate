import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { ICourse } from '@server/Courses/types/ICourse';

@Entity({ name: 'courses' })
export class Course implements ICourse {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: string;

  @Column()
  public imageUrl!: string;

  @Column()
  public content!: string;
}
