export const ONE_DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

export const addMilliseconds = (date: Date, ms: number): Date => {
  return new Date(date.getTime() + ms);
};
