const { add } = require("../calculator/calculator");

//all files in the test folder will be considered tests even when not having .spec or .test in the name

it("adds numbers", () => {
  expect(add(2, 2)).toBe(4);
});
