import { getCurrency, addComma } from './number-format';
import { Locales } from '../../types/locale';

describe('getCurrency', () => {
  it('should return formatted date based on locale', () => {
    const locale: Locales = 'en-US';
    const format = 'short';
    const expectedDate = new Date().toLocaleDateString(locale, {
      dateStyle: format,
    });

    const result = getCurrency(locale, format);

    expect(result).toBe(expectedDate);
  });
});

describe('addComma', () => {
  it('should return number with comma separator', () => {
    const number = 1000000;
    const expectedNumber = '1,000,000';

    const result = addComma(number);

    expect(result).toBe(expectedNumber);
  });
});
