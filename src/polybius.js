// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const polybiusSquareEncode = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };

  const polybiusSquareDecode = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };

  const numbers = [
    11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44,
    45, 51, 52, 53, 54, 55,
  ];

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function polybius(input, encode = true) {
    //make input lower case
    input = input.toLowerCase();
    //create result string
    let result = "";

    //encoding
    //leave spaces as is
    if (encode === true) {
      for (let i = 0; i < input.length; i++) {
        const letter = input[i];
        //keep spaces as is
        if (alphabet.includes(letter)) {
          //loop through encode object and add each number to string
          for (let letter in polybiusSquareEncode) {
            // console.log(polybiusSquareEncode[letter]);
            if (input[i] === letter) {
              result += polybiusSquareEncode[input[i]];
            }
          }
        } else {
          result += letter;
        }
      }
    }

    //decoding

    if (!encode) {
      //group into twos
      let spacesAdded = input.replace(" ", 65);
      const groupOfTwos = spacesAdded.split(/(?=(?:..)*$)/);
      console.log(groupOfTwos);

      //if string is odd return false
      if (spacesAdded.length % 2 !== 0) return false;

      //loop through groups array, if input matches num add it to results array
      for (let j = 0; j < groupOfTwos.length; j++) {
        const number = groupOfTwos[j];
        console.log(numbers.some((el) => el == number));

        //leave spaces
        if (numbers.some((el) => el == number) === true) {
          //loop through decode object
          for (let num in polybiusSquareDecode) {
            if (num == groupOfTwos[j]) {
              result += polybiusSquareDecode[groupOfTwos[j]];
            }
          }
        } else {
          result += " ";
        }
      }
    }

    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
