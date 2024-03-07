import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  logWarning(message: any) {
    console.warn(message)
  }

  logError(message: any) {
    console.error(message)
  }

  log(message: any) {
    console.log(message)
  }
}
