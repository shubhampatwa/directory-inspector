import { isNonNegativeNumber, isNonPositiveNumber } from './number';

describe('validations', () => {
  it('isNonNegativeNumber', () => {
    expect(isNonNegativeNumber(1)).toEqual(false);
    expect(isNonNegativeNumber(0)).toEqual(false);
    expect(isNonNegativeNumber(-1)).toEqual(true);
    expect(isNonNegativeNumber('-')).toEqual(true);
  });

  it('isNonPositiveNumber', () => {
    expect(isNonPositiveNumber(1)).toEqual(false);
    expect(isNonPositiveNumber(0)).toEqual(true);
    expect(isNonPositiveNumber(-1)).toEqual(true);
    expect(isNonPositiveNumber('-')).toEqual(true);
  });
});
