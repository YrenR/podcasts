import { addMilliseconds, ONE_DAY_IN_MILLISECONDS } from "../util";

describe("tools - addMilliseconds", () => {
  it("Simple add one milliseconds", () => {
    const input = new Date("2000-01-01T00:00:00.000Z");
    const expected = new Date("2000-01-01T00:00:00.001Z");

    const addedDate = addMilliseconds(input, 1);

    expect(expected.getTime()).toEqual(addedDate.getTime());
  });

  it("Simple add 5 second", () => {
    const input = new Date("2000-01-01T00:00:00.000Z");
    const expected = new Date("2000-01-01T00:00:05.000Z");
    const fiveSeconds = 5 * 1000;

    const addedDate = addMilliseconds(input, fiveSeconds);

    expect(expected.getTime()).toEqual(addedDate.getTime());
  });

  it("Simple add a week", () => {
    const input = new Date("2000-01-01T00:00:00.000Z");
    const expected = new Date("2000-01-08T00:00:00.000Z");
    const oneWeek = ONE_DAY_IN_MILLISECONDS * 7;

    const addedDate = addMilliseconds(input, oneWeek);

    expect(expected.getTime()).toEqual(addedDate.getTime());
  });

  it("Add one day in 31 of december", () => {
    const input = new Date("2000-12-31T00:00:00.000Z");
    const expected = new Date("2001-01-01T00:00:00.000Z");

    const addedDate = addMilliseconds(input, ONE_DAY_IN_MILLISECONDS);

    expect(expected.getTime()).toEqual(addedDate.getTime());
  });

  it("Add a negative day must return previous day", () => {
    const input = new Date("2000-01-01T00:00:00.000Z");
    const expected = new Date("1999-12-31T00:00:00.000Z");

    const addedDate = addMilliseconds(input, ONE_DAY_IN_MILLISECONDS * -1);

    expect(expected.getTime()).toEqual(addedDate.getTime());
  });
});
