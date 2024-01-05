import { Global, Module } from '@nestjs/common'
import { Generator } from './generator'
import { Paginator } from './paginator'

@Global()
@Module({
  providers: [Generator, Paginator],
  exports: [Generator, Paginator]
})
export class UtilModule {}
