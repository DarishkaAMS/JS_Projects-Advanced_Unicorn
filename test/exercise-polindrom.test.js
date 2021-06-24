const main = require("../src//exercise-polindrom");

test("test 5.1", () => {
  expect.assertions(1);

  let result = main(121);
  expect(result).toEqual(true);
});

test("test 5.2", () => {
  expect.assertions(1);

  let result = main(123);
  expect(result).toEqual(false);
});

test("test 5.3", () => {
  expect.assertions(1);

  let result = main(1221);
  expect(result).toEqual(true);
});

test("test 5.4", () => {
  expect.assertions(1);

  let result = main(4558);
  expect(result).toEqual(false);
});

test("test 5.5", () => {
  expect.assertions(1);

  let result = main(-717);
  expect(result).toEqual(false);
});

test("test 5.6", () => {
  expect.assertions(1);

  let result = main(-942);
  expect(result).toEqual(false);
});

