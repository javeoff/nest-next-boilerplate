import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  public index(): unknown {
    return {
      title: 'Next with Nest',
    };
  }
}
