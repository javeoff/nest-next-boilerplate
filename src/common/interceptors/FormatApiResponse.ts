import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

import { IResponse } from '@server/Common/api/types/IResponse';

@Injectable()
export class FormatApiResponse implements NestInterceptor {
  public intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<unknown> {
    return next.handle().pipe(
      map(
        (payload): IResponse => ({
          code: HttpStatus.OK,
          message: '',
          payload: payload || {},
        }),
      ),
    );
  }
}
