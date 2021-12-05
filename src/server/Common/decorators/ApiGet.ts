import { applyDecorators, Get, UseInterceptors } from '@nestjs/common';

import { FormatApiResponse } from '@common/interceptors/FormatApiResponse';

export const ApiGet = (route = '', hasAuthGuard = true): MethodDecorator => {
  const decorators = [Get(`/api/${route}`), UseInterceptors(FormatApiResponse)];

  if (hasAuthGuard) {
    // decorators.push(UseGuards())
  }

  return applyDecorators(...decorators);
};
