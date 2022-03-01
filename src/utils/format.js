export const twoDigitsInteger = number => (number <= 0 ? '00' : number);

export const isEmpty = object => {
  for (const property in object) {
    return false;
  }
  return true;
};
