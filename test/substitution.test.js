const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  it("returns false if the given alphabet is not 26 characters long", () => {
    const input = "hello";
    const alphabet = "xoyqmcgrukswa";
    const actual = substitution(input, alphabet);

    expect(actual).to.be.false;
  });

  it("correctly translates frase based on alphabet given", () => {
    const input = "hello";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const actual = substitution(input, alphabet);
    const expected = "d&ccv";

    expect(actual).to.equal(expected);
  });

  it("ignores capital letters", () => {
    const input = "HelLo";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const actual = substitution(input, alphabet);
    const expected = "d&ccv";

    expect(actual).to.equal(expected);
  });

  it("maintains spaces", () => {
    const input = "Hello there";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const actual = substitution(input, alphabet);
    const expected = "d&ccv jd&b&";

    expect(actual).to.equal(expected);
  });

  it("maintains false if the given alphabet is not unique", () => {
    const input = "Hello there";
    const alphabet = "$wae&zrdxtacygvuhbijnokmpl";
    const actual = substitution(input, alphabet);

    expect(actual).to.be.false;
  });
});
