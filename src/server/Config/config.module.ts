import { RenderModule } from 'nest-next';
import Next from 'next';
import { Module } from '@nestjs/common';

@Module({
  imports: [RenderModule.forRootAsync(Next({ dev: true }), { viewsDir: '' })],
})
export class ConfigModule {}
