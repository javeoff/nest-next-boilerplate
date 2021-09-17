import { AxiosResponse } from 'axios';

import { ApiResponse } from '@server/Common/api/ApiResponse';

export interface IError<Response = Record<string, unknown>> {
  /**
   * Ответ от axios.
   */
  response?: AxiosResponse<ApiResponse<Response>>;
}
