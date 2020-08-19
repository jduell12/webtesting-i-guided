const { add, multiply } = require("./calculator.js");

//triple a thinking model
//arrange - setup for the test
//act - execute the code you're testing
//assert - test the assumption on how the code should work

//ttd testing (test driven development)
// 1. write failing test
// 2. write just enough code to pass the test
// 3. optimize, clean up code without adding new functionality with confidence

describe("add()", () => {
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

  //   it("should add two numbers (using it)", () => {
  //     expect(add(2, 2)).toBe(4);
  //     expect(add(0, 0)).toBe(0);
  //     expect(add(2, -2)).toBe(0);
  //   });

  //   it("should return the value if called with a single value", () => {
  //     expect(add(2)).toBe(2);
  //     expect(add(0)).toBe(0);
  //     expect(add(-1)).toBe(-1);
  //   });

  //it.only --> runs only this test
  //it.skip --> skips this test

  //refactor the testing since this test includes the previous testing parameters
  it("should return the sum of a comma separated list of numbers", () => {
    expect(add(1)).toBe(1);
    expect(add(1, 2)).toBe(3);
    expect(add(1, 1, 1)).toBe(3);
    expect(add(1, 2, 3, 5)).toBe(11);
  });
});

describe("multiply()", () => {
  it("multiples two numbers correctly", () => {
    expect(multiply(2, 1)).toBe(2);
  });
});
