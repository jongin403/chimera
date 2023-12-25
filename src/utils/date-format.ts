import { Locales, defaultLocale } from '../types/locale';

// Get the current date in the specified format
export const getCurrentDate = (locale: Locales, format: string): string => {
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat(locale).format(currentDate);
  return formattedDate;
};

// export const getCurrentTime = (locale: Locales, format: string): string => {
//   const currentTime = new Date();
//   const formatter = new Intl.DateTimeFormat(locale).format(currentDate);
//   return formatter
//     .formatToParts(currentTime)
//     .map((part) => part.value)
//     .join('');
// };

// export const formatDate = (date: Date, format: string): string => {
//   const formatter = new Intl.DateTimeFormat(undefined, { format: format });
//   return formatter.format(date);
// };

// Get the day of the week for a given date
export const getDayOfWeek = (date: Date): string => {
  const formatter = new Intl.DateTimeFormat(undefined, { weekday: 'long' });
  return formatter.format(date);
};

// Get the month for a given date
export const getMonth = (date: Date): string => {
  const formatter = new Intl.DateTimeFormat(undefined, { month: 'long' });
  return formatter.format(date);
};
