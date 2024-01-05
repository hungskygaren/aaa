import { Module } from '@nestjs/common'
import { ConfigModule } from './core/config/config.module'
import { UtilModule } from './core/util/util.module'
import { DatabaseModule } from './core/database/database.module'
import { EventModule } from './core/event/event.module'
import { ManagerModule } from './core/manager/manager.module'
import { InitializeModule } from './worker/initialize/initialize.module'
import { IndexModule } from './services/index/index.module'

@Module({
  imports: [ConfigModule, UtilModule, DatabaseModule, EventModule, ManagerModule, InitializeModule, IndexModule]
})
export class AppModule {}
