const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("encoding", () => {
  it("translates letters i and j to 42", () => {
    const input = "ij";
    const expected = "4242";
    const actual = polybius(input);

    expect(actual).to.equal(expected);
  });

  it("ignores capital letters", () => {
    const input = "Hello";
    const expected = "3251131343";
    const actual = polybius(input);

    expect(actual).to.equal(expected);
  });

  it("respects spaces when encoding", () => {
    const input = "Hi there";
    const expected = "3242 4432512451";
    const actual = polybius(input);

    expect(actual).to.equal(expected);
  });
});

describe("decoding", () => {
  it("respects spaces when decoding", () => {
    const input = "3242 4432512451";
    const encode = false;
    const expected = "h(i/j) there";
    const actual = polybius(input, encode);

    expect(actual).to.equal(expected);
  });

  it("it translates 42 to (i/j)", () => {
    const input = "42";
    const encode = false;
    const expected = "(i/j)";
    const actual = polybius(input, encode);

    expect(actual).to.equal(expected);
  });
});
