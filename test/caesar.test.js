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

describe("caesarCipher", () => {
  it("ignores capital letters", () => {
    const input = "HeLlo";
    const shift = 4;
    const actual = caesar(input, shift);
    const expected = "lipps";

    expect(actual).to.equal(expected);
  });

  it("handles shifts that go past the end of the alphabet", () => {
    const input = "zebra magazine";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = "cheud pdjdclqh";

    expect(actual).to.equal(expected);
  });

  it("maintains spaces and other nonalphabetic symbols in the message", () => {
    const input = "Hello !";
    const shift = 4;
    const expected = "lipps !";
    const actual = caesar(input, shift);

    expect(actual).to.equal(expected);
  });
});
