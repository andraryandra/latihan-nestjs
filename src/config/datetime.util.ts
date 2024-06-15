// datetime.util.ts

import { DateTime } from 'luxon';

export class DateTimeUtil {
  static toLocalISOString(dateTime: DateTime, hoursToAdd: number): string {
    return dateTime.plus({ hours: hoursToAdd }).toISO();
  }
}
