import { Global, Module } from '@nestjs/common';

import { SystemErrorFactory } from '@server/SystemError/factories/SystemErrorFactory';

@Global()
@Module({
  providers: [SystemErrorFactory],
  exports: [SystemErrorFactory],
})
export class SystemErrorModule {}
