const main = require("../src/exercise-closures");

test("test 8.1", async () => {
  expect.assertions(1);
  let user = main("person");
  user.changeName("client");
  expect(user.getRevision()).toEqual(1);
});

test("test 8.2", async () => {
  expect.assertions(1);
  let user = main("person");
  user.changeName("client");
  user.changeName("customer");
  expect(user.getRevision()).toEqual(2);
});

test("test 8.3", async () => {
  expect.assertions(1);
  let user = main("person");
  expect(user.getRevision()).toEqual(0);
});

