import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'
import { ValidationPipe } from '@nestjs/common'

import { AppModule } from './app.module'

import { TaskManager } from './core/manager/task.manager'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const configService = app.get(ConfigService)

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true
    })
  )

  await app.listen(+configService.get('SERVER_PORT'))

  const taskManager = app.get(TaskManager)
  await taskManager.initialize()
}
bootstrap()
