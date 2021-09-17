import { applyDecorators, Get, Render } from '@nestjs/common';

import { PageName } from '@common/enums/PageName';

export const Page = (page: PageName): MethodDecorator => {
  const decorators = [Get('/' + page), Render(page)];

  return applyDecorators(...decorators);
};
