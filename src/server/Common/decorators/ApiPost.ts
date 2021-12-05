import { applyDecorators, Post, UseInterceptors } from '@nestjs/common';

import { FormatApiResponse } from '@common/interceptors/FormatApiResponse';

export const ApiPost = (route = '', hasAuthGuard = true): MethodDecorator => {
  const decorators = [
    Post(`/api/${route}`),
    UseInterceptors(FormatApiResponse),
  ];

  if (hasAuthGuard) {
    // decorators.push(UseGuards())
  }

  return applyDecorators(...decorators);
};
