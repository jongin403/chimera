import { Locales } from '../../types/locale';

export const getCurrency = (locale: Locales, format: string): string => {
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat(locale).format(currentDate);
  return formattedDate;
};

export const addComma = (number: number): string => {
  const formatter = new Intl.NumberFormat();
  return formatter.format(number);
};
