import { AxiosResponse } from 'axios';

import { IError } from '@server/Common/api/types/IError';
import { IResponse } from '@server/Common/api/types/IResponse';

export class ApiError extends Error implements IError {
  public constructor(public readonly response: AxiosResponse<IResponse>) {
    super();
  }
}
