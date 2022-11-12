import { addMilliseconds, isExpired, ONE_DAY_IN_MILLISECONDS } from "../util";

describe("tools - addMilliseconds", () => {
  test("Simple add one milliseconds", () => {
    const input = new Date("2000-01-01T00:00:00.000Z");
    const expected = new Date("2000-01-01T00:00:00.001Z");

    const addedDate = addMilliseconds(input, 1);

    expect(expected.getTime()).toEqual(addedDate.getTime());
  });

  test("Simple add 5 second", () => {
    const input = new Date("2000-01-01T00:00:00.000Z");
    const expected = new Date("2000-01-01T00:00:05.000Z");
    const fiveSeconds = 5 * 1000;

    const addedDate = addMilliseconds(input, fiveSeconds);

    expect(expected.getTime()).toEqual(addedDate.getTime());
  });

  test("Simple add a week", () => {
    const input = new Date("2000-01-01T00:00:00.000Z");
    const expected = new Date("2000-01-08T00:00:00.000Z");
    const oneWeek = ONE_DAY_IN_MILLISECONDS * 7;

    const addedDate = addMilliseconds(input, oneWeek);

    expect(expected.getTime()).toEqual(addedDate.getTime());
  });

  test("Add one day in 31 of december", () => {
    const input = new Date("2000-12-31T00:00:00.000Z");
    const expected = new Date("2001-01-01T00:00:00.000Z");

    const addedDate = addMilliseconds(input, ONE_DAY_IN_MILLISECONDS);

    expect(expected.getTime()).toEqual(addedDate.getTime());
  });

  test("Add a negative day must return previous day", () => {
    const input = new Date("2000-01-01T00:00:00.000Z");
    const expected = new Date("1999-12-31T00:00:00.000Z");

    const addedDate = addMilliseconds(input, ONE_DAY_IN_MILLISECONDS * -1);

    expect(expected.getTime()).toEqual(addedDate.getTime());
  });
});

describe("tools - isExpired", () => {
  jest.useFakeTimers().setSystemTime(new Date("2000-01-01T00:00:00.000Z"));

  test("using an old date", () => {
    const oldDate = new Date("1990-01-01T00:00:00.000Z");

    expect(isExpired(oldDate)).toBeTruthy();
  });

  test("using same date", () => {
    const sameDate = new Date("2000-01-01T00:00:00.000Z");

    expect(isExpired(sameDate)).toBeFalsy();
  });

  test("using a later date", () => {
    const futureDate = new Date("2200-01-01T00:00:00.000Z");

    expect(isExpired(futureDate)).toBeFalsy();
  });
});
