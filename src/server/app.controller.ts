import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('Index')
  public index() {
    return {
      title: 'Next with Nest',
    };
  }
}
