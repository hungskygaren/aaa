import { Injectable, Logger } from '@nestjs/common'
import { TransactionManager } from '../../core/manager/transaction.manager'

@Injectable()
export class InitializeService {
  constructor(private transactionManager: TransactionManager) {}

  async handle() {
    let transaction = null
    try {
      transaction = await this.transactionManager.open()
      await this.transactionManager.commit(transaction)
    } catch (e) {
      await this.transactionManager.rollback(transaction)
      Logger.error(e)
      throw e
    }
  }
}
