// Make code working using binding.
// Function main sould return information about person(attribute of main function).

// Example of input
// const person =  {
//   name: "Ivan",
//   age: 10
// }

function getInfo () {
  return `Name: ${this.name}, age: ${this.age}`;
}

function main (person) {
  // solution with bind applying
  let userInfo = getInfo.bind(person);
  return userInfo();

}
// main(person);
module.exports = main;