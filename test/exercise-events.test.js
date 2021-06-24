const main = require("../src/exercise-events");
const OUTPUT_MESSAGES = {
  error: "Error!",
  success: "OK.Success!",
  loading: "It's loading..."
}

test("test 3.1", () => {
  expect.assertions(2);

  let result = main("error");

  expect(typeof result).toEqual("string");
  expect(result).toEqual(OUTPUT_MESSAGES.error);
});

test("test 3.2", () => {
  expect.assertions(2);

  let result = main("success");

  expect(typeof result).toEqual("string");
  expect(result).toEqual(OUTPUT_MESSAGES.success);
});


test("test 3.2", () => {
  expect.assertions(2);

  let result = main("loading");

  expect(typeof result).toEqual("string");
  expect(result).toEqual(OUTPUT_MESSAGES.loading);
});