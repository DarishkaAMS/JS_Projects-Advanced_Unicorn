const main = require("../src/exercise-binding");

test("test 1.1", () => {
  let person = {
    name: "Ivan",
    age: 10
  };
  let result = main(person);
  expect(result).toEqual(`Name: ${person.name}, age: ${person.age}`);
});

test("test 1.2", () => {
  let person = {
    name: "Jhon",
    age: 13
  };
  let result = main(person);
  expect(result).toEqual(`Name: ${person.name}, age: ${person.age}`);
});

test("test 1.3", () => {
  let person = {
    name: "Rick",
    age: -54
  };
  let result = main(person);
  expect(result).toEqual(`Name: ${person.name}, age: ${person.age}`);
});