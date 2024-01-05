import { Controller, Get } from '@nestjs/common'
import { DateTimeManager } from '../../core/manager/date-time.manager'
import { IndexRes } from './index.interface'

@Controller()
export class IndexController {
  constructor(private dateTimeManager: DateTimeManager) {}

  @Get()
  async index(): Promise<IndexRes> {
    // Get current database timestamp
    const currentTimestamp = await this.dateTimeManager.currentTimestamp()

    // Combine and return response
    return <IndexRes>{
      code: 200,
      message: "Hi! I'm working well...",
      timestamp: currentTimestamp
    }
  }

  @Get('/health-check')
  async check(): Promise<IndexRes> {
    // Get current database timestamp
    const currentTimestamp = await this.dateTimeManager.currentTimestamp()

    // Combine and return response
    return <IndexRes>{
      code: 200,
      message: "Hi! I'm working well...",
      timestamp: currentTimestamp
    }
  }
}
