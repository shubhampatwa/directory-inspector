export const isNonNegativeNumber = (value: number | string | undefined): boolean => {
  return !!(
    (
      value !== 0 && // value is not `0`
      value && // value is preset
      value &&
      (isNaN(value as number) || // and value is a valid number
        value < 0)
    ) // and it's not negative number
  );
};

export const isNonPositiveNumber = (value: number | string | undefined): boolean => {
  return !!(!value || isNaN(value as number) || value < 1);
};
