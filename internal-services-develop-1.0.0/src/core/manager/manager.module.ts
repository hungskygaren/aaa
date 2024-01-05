import { Global, Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { ScheduleModule } from '@nestjs/schedule'

import { TransactionManager } from './transaction.manager'
import { DateTimeManager } from './date-time.manager'
import { TaskManager } from './task.manager'
import { JobManager } from './job.manager'

import { Job } from '../database/job.model'

@Global()
@Module({
  imports: [ScheduleModule.forRoot(), SequelizeModule.forFeature([Job])],
  providers: [DateTimeManager, TransactionManager, JobManager, TaskManager],
  exports: [DateTimeManager, TransactionManager, JobManager, TaskManager]
})
export class ManagerModule {}
