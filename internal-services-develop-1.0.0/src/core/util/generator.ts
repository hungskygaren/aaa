import { v4 as uuidv4 } from 'uuid'
import { Injectable } from '@nestjs/common'

@Injectable()
export class Generator {
  /**
   * Generate UUID - V4
   */
  uuid(): string {
    return uuidv4()
  }
}
