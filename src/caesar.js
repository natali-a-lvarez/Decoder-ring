// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    //error handling
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;

    //create variables
    input = input.toLowerCase();
    let result = "";
    let charCode = 0;
    const format = /[ `!@#$%&*_+-;':",.?~]/;

    //loop over each letter to shift
    for (let i = 0; i < input.length; i++) {
      //when encoding
      if (
        (encode = true) &&
        input[i] != " " &&
        format.test(input[i] === false)
      ) {
        //ignore if its punctuation
        //wrap alphabet
        charCode = input[i].charCodeAt() + shift;
        result += String.fromCharCode(charCode);
      } else if (input[i] === " ") {
        result += " ";
      }
      if ((encode = false)) {
        //when decoding
        //ignore spaces
        //wrap alphabet
      }
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
