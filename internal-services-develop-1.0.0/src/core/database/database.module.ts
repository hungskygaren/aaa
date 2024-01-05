import { Global, Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { ConfigService } from '@nestjs/config'
import { Job } from './job.model'

@Global()
@Module({
  imports: [
    SequelizeModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        dialect: configService.get('DB_TYPE'),
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        autoLoadModels: true,
        synchronize: true,
        models: [Job],
        pool: {
          max: +configService.get('DB_POOL_MAX'),
          min: +configService.get('DB_POOL_MIN'),
          acquire: +configService.get('DB_POOL_ACQUIRE'),
          idle: +configService.get('DB_POOL_IDLE')
        },
        dialectOptions: {
          useUTC: true
        }
      })
    })
  ]
})
export class DatabaseModule {}
