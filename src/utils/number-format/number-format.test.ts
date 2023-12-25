import { getCurrency, addComma } from './number-format';
import { Locales } from '../../types/locale';

describe('addComma', () => {
  it('should return number with comma separator', () => {
    const number = 1000000;
    const expectedNumber = '1,000,000';

    const result = addComma(number);

    expect(result).toBe(expectedNumber);
  });
});
