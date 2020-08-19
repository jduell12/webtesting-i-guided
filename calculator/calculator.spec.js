const { add } = require("./calculator.js");
const { TestScheduler } = require("jest");

//triple a thinking model
//arrange - setup for the test
//act - execute the code you're testing
//assert - test the assumption on how the code should work

test("adds two numbers correctly", () => {
  //arrange
  const a = 2;
  const b = 2;
  const sum = 4;

  //act
  const result = add(a, b);

  //assert
  expect(result).toBe(sum);
});

it("should add two numbers (using it)", () => {
  expect(add(2, 2)).toBe(4);
});

// describe("calculator function", () => {
//   it("adds two numbers together", () => {
//     const expected = 4;
//     const actual = add(2, 2);
//     expect(actual).not.toBe(5);
//     expect(actual).toBe(expected);
//   });
// });
