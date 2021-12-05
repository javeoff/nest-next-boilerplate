import { AnyObject } from 'immer/dist/types/types-internal';
import Axios, {
  AxiosError,
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
} from 'axios';
import { HttpStatus } from '@nestjs/common';

import { transformResponse } from '@server/Common/api/utils/transformResponse';
import { ILink } from '@common/types/ILink';
import { ApiResponse } from '@server/Common/api/ApiResponse';
import { getApiRoute } from '@common/utils/routing/getApiRoute';
import { ApiPageError } from '@server/Common/api/ApiPageError';
import { ErrorPageType } from '@common/enums/ErrorPageType';
import { ApiError } from '@server/Common/api/ApiError';

export interface IAxiosRequestConfig
  extends Omit<AxiosRequestConfig, 'params'>,
    Omit<ILink, 'page' | 'href'> {}

export const apiAxiosInstance = Axios.create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  transformResponse,
});

apiAxiosInstance.interceptors.response.use(
  undefined,
  (error: AxiosError<ApiResponse> | Error): never => {
    if (
      !('isAxiosError' in error) ||
      !error.response ||
      !error.response.data.payload
    ) {
      throw new ApiPageError(ErrorPageType.ERROR);
    }

    if (error.response.status === HttpStatus.NOT_FOUND) {
      throw new ApiPageError(ErrorPageType.NOT_FOUND, error.response);
    }

    throw new ApiError(error.response);
  },
);

export abstract class ApiServiceBase {
  private readonly axios: AxiosInstance = apiAxiosInstance;

  private static async response<Response extends AnyObject>(
    promise: AxiosPromise<ApiResponse<Response>>,
  ): Promise<Response> {
    const response = await promise;

    return response.data.payload;
  }

  protected get<Response extends AnyObject>(
    url: string,
    { params, query, ...config }: IAxiosRequestConfig = {},
  ): Promise<Response> {
    return ApiServiceBase.response<Response>(
      this.axios.get(getApiRoute(url, { params, query }), config),
    );
  }

  protected post<
    Request extends AnyObject,
    Response extends AnyObject = AnyObject,
  >(
    url: string,
    data?: Request,
    { params, query, ...config }: IAxiosRequestConfig = {},
  ): Promise<Response> {
    return ApiServiceBase.response<Response>(
      this.axios.post(getApiRoute(url, { params, query }), data, config),
    );
  }

  protected put<
    Request extends AnyObject,
    Response extends AnyObject = AnyObject,
  >(
    url: string,
    data?: Request,
    { params, query, ...config }: IAxiosRequestConfig = {},
  ): Promise<Response> {
    return ApiServiceBase.response<Response>(
      this.axios.put(getApiRoute(url, { params, query }), data, config),
    );
  }

  protected patch<
    Request extends AnyObject,
    Response extends AnyObject = AnyObject,
  >(
    url: string,
    data?: Request,
    { params, query, ...config }: IAxiosRequestConfig = {},
  ): Promise<Response> {
    return ApiServiceBase.response<Response>(
      this.axios.patch(getApiRoute(url, { params, query }), data, config),
    );
  }

  protected delete<Response extends AnyObject = AnyObject>(
    url: string,
    { params, query, ...config }: IAxiosRequestConfig = {},
  ): Promise<Response> {
    return ApiServiceBase.response<Response>(
      this.axios.delete(getApiRoute(url, { params, query }), config),
    );
  }
}
