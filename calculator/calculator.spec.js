const { add } = require("./calculator.js");

// test away!
describe("calculator function", () => {
  it("adds two numbers together", () => {
    const expected = 4;
    const actual = add(2, 2);
    expect(actual).not.toBe(5);
    expect(actual).toBe(expected);
  });
});
