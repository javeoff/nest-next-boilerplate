import { AxiosResponse } from 'axios';

import { ApiResponse } from '@server/Common/api/ApiResponse';
import { ErrorPageType } from '@common/enums/ErrorPageType';

export class ApiPageError extends Error {
  public constructor(
    public readonly errorPageType: ErrorPageType,
    public readonly response?: AxiosResponse<ApiResponse>,
  ) {
    super();
  }
}
