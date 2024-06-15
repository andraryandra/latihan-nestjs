export function convertUTCDateToKST(date) {
    const utcDate = new Date(date);
    utcDate.setHours(utcDate.getHours() + 9);  // Add 9 hours to the UTC date to convert it to KST (Korea Standard Time)
    return utcDate;
   }
   
   export function convertDateToUTC(date) {
    const localDate = new Date(date);
    localDate.setHours(localDate.getHours() - 9);  // Subtract 9 hours from the local date to convert it to UTC time
    return localDate;
   }
   
   export function adjustDates(obj, dateConversionFunction) {
    if (!obj || typeof obj !== 'object') return;  // Check if the input is not an object or is null, then exit the function
   
    for (const key of Object.keys(obj)) {
      // If the property is a Date object, apply the provided date conversion function
      if (obj[key] instanceof Date) {
        obj[key] = dateConversionFunction(obj[key]);
      }
      // If the property is an object, recursively adjust its dates
      else if (typeof obj[key] === 'object') {
        adjustDates(obj[key], dateConversionFunction);
      }
    }
   }