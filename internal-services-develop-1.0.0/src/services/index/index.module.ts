import { Module } from '@nestjs/common'
import { IndexController } from './index.controller'

@Module({
  providers: [],
  controllers: [IndexController]
})
export class IndexModule {}
