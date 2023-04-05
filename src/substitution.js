// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  let regularAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    //make input lowercase
    input = input.toLowerCase();

    //make sure alphabet it unique, exists, and is 26 characters if not return false
    const setAlpha = new Set(alphabet);
    if (!alphabet || alphabet.length != 26 || setAlpha.size !== alphabet.length)
      return false;

    // make both alphabets into arrayss
    regularAlphabet = [...regularAlphabet];
    alphabet = [...alphabet];

    // make an object that has the regular alphabet as keys and the new one as values
    let result = {};
    result = Object.assign(
      ...regularAlphabet.map((l, i) => ({ [l]: alphabet[i] }))
    );

    //helper function for decoding
    function getKeyByValue(object, value) {
      return Object.keys(object).find((key) => object[key] === value);
    }

    // Encode
    let encodedWord = "";
    for (let letter of input) {
      if (letter === " ") {
        encodedWord += letter;
      } else if (encode) {
        encodedWord += result[letter];
      } else {
        encodedWord += getKeyByValue(result, letter);
      }
    }
    return encodedWord;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
