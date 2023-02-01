export const isEmptyString = (value: string) => value.length === 0;
export const isEmail = (value: string) =>
  /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/gi.test(value);
