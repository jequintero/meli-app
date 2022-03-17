export const twoDigitsInteger = number =>
  `${number}`.length <= 1 ? `0${number}` : number;
