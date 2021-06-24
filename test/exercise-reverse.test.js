const main = require("../src/exercise-reverse");

test("test 4.1", () => {
  expect.assertions(1);

  let result = main(123);
  expect(result).toEqual(321);
});

test("test 4.2", () => {
  expect.assertions(1);

  let result = main(-123);
  expect(result).toEqual(-321);
});

test("test 4.3", () => {
  expect.assertions(1);

  let result = main(98521);
  expect(result).toEqual(12589);
});

test("test 4.4", () => {
  expect.assertions(1);

  let result = main(1534236469);
  expect(result).toEqual(0);
});

test("test 4.5", () => {
  expect.assertions(1);

  let result = main(-2147483648);
  expect(result).toEqual(0);
});