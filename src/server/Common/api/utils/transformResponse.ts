import { AnyObject } from 'immer/dist/types/types-internal';

import { isApiResponseType } from '@server/Common/api/utils/isApiResponseType';
import { IResponse } from '@server/Common/api/types/IResponse';
import { ApiResponse } from '@server/Common/api/ApiResponse';

export const transformResponse = <Response extends AnyObject>(
  data: unknown,
): IResponse<Response> => {
  if (!data || typeof data !== 'string') {
    throw new TypeError(
      `Сервер вернул невалидные данные ${JSON.stringify(data)}`,
    );
  }

  const parsedData = JSON.parse(data);

  if (!isApiResponseType<Response>(parsedData)) {
    throw new TypeError(
      `Сервер вернул невалидные данные ${JSON.stringify(data)}`,
    );
  }

  return new ApiResponse(parsedData);
};
