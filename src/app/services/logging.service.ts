import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  log(message: string) {
        console.log('Logging.service log message: INFO',
          message);
    }
  constructor() { }
}
