import { Module } from '@nestjs/common'
import { InitializeService } from './initialize.service'
import { InitializeListener } from './initialize.listener'
import { SequelizeModule } from '@nestjs/sequelize'

@Module({
  imports: [SequelizeModule.forFeature([])],
  providers: [InitializeService, InitializeListener]
})
export class InitializeModule {}
