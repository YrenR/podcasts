export const ONE_DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

export const addMilliseconds = (date: Date, ms: number): Date => {
  return new Date(date.getTime() + ms);
};

export const isExpired = (date: Date | string): boolean => {
  return new Date(date) < new Date();
};

export const padTo2Digits = (num: number) => {
  return num.toString().padStart(2, "0");
};

export const normalizeMillisecondsToMinSec = (milliseconds: number) => {
  const date = new Date(milliseconds);
  const seconds = date.getUTCSeconds();
  const minutes = date.getUTCMinutes();
  const hours = date.getUTCHours();

  const normalize = `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;

  if (hours > 0) return `${padTo2Digits(hours)}:${normalize}`;
  else return normalize;
};

export const formatDateDDMMYYYY = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${padTo2Digits(day)}/${padTo2Digits(month)}/${year}`;
};
