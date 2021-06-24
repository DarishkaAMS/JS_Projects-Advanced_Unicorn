const main = require("../src/exercise-sum-of-two");

test("test 2.1", () => {
  let result = main([2, 7, 11, 15], 9);
  expect(result.toString()).toEqual("0,1");
});

test("test 2.2", () => {
  let result = main([3, 2, 4], 6);
  expect(result.toString()).toEqual("1,2");
});

test("test 2.3", () => {
  let result = main([9, 11, 34, 6, 8], 45);
  expect(result.toString()).toEqual("1,2");
});

test("test 2.4", () => {
  let result = main([7, 13, 1, 5, 9], 18);
  expect(result.toString()).toEqual("1,3");
});

test("test 2.5", () => {
  let result = main([-8, 3, 6, 7], -1);
  expect(result.toString()).toEqual("0,3");
});