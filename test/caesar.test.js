const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("errors", () => {
  it("function returns false if shift value is equal to 0", () => {
    const input = "Thinkful";
    const shift = 0;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });
  it("function returns false if shift value is not present", () => {
    const input = "Thinkful";
    const actual = caesar(input);
    expect(actual).to.be.false;
  });
  it("function returns false if shift value is less than -25", () => {
    const input = "Thinkful";
    const shift = -26;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });
  it("function returns false if shift value is more than 25", () => {
    const input = "Thinkful";
    const shift = 26;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });
});

describe("caesarEncript", () => {
  it("returns a string", () => {
    const input = "hello";
    const shift = 4;
    const actual = caesar(input, shift);

    expect(actual).to.be.a("string");
  });
});
