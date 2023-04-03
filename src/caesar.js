// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    //error handling
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;

    if (encode === false) {
      shift *= -1;
    }

    //create variables
    input = input.toLowerCase();
    let result = "";
    let charCode = 0;
    const letters = "abcdefghijklmnopqrstuvwxyz";

    //loop over each letter to shift
    for (let i = 0; i < input.length; i++) {
      const letter = input[i].toLowerCase();
      if (letters.includes(letter)) {
        let shiftedIndex = letters.indexOf(letter) + shift;

        //wrap alphabet
        if (shiftedIndex > 25) {
          shiftedIndex += -26;
        }
        if (shiftedIndex < 0 && shiftedIndex > -25) {
          //make negative shift possible
          shiftedIndex += 26;
        }
        result += letters[shiftedIndex];
      } else {
        // ignore special characters and spaces
        result += letter;
      }
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
