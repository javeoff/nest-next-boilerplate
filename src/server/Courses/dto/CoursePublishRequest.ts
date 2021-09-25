import { IsDefined } from 'class-validator';

export class CoursePublishRequest {
  @IsDefined()
  public name!: string;

  @IsDefined()
  public imageUrl!: string;

  @IsDefined()
  public content!: string;
}
