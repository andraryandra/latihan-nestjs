import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as moment from 'moment-timezone';

@Injectable()
export class TimezoneMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const oldSend = res.send;

    res.send = function (...args) {
      let data = JSON.parse(args[0]);

      if (Array.isArray(data)) {
        data = data.map((item) =>
          this.convertTimestampsToJakartaTimezone(item),
        );
      } else if (typeof data === 'object') {
        data = this.convertTimestampsToJakartaTimezone(data);
      }

      args[0] = JSON.stringify(data);
      oldSend.apply(res, args);
    }.bind(this);

    next();
  }

  convertTimestampsToJakartaTimezone(obj) {
    for (const key in obj) {
      if (obj[key] instanceof Date) {
        obj[key] = moment(obj[key]).tz('Asia/Jakarta').locale('id').format('YYYY-MM-DD HH:mm:ss');
      } else if (typeof obj[key] === 'object') {
        this.convertTimestampsToJakartaTimezone(obj[key]);
      }
    }

    return obj;
  }
}