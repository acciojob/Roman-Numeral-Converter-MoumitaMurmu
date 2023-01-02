function convertToRoman(num) {
  // Time Complexity is O(N) and space O(1) 
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  //your code here
  let finalRoman = [];
  // there is no roman character for these numbers
  if (num < 1 ) return finalRoman.join("");

  var romanNumericPair = Object.entries(romanNumerals);

  for (const [romanCharacter, romanNumeric] of romanNumericPair) {
    // can we even convert it to roman character lets say num is 2, so 2 > 1 (I) would hit
    while (num >= romanNumeric) {
      // let's say the num is 105 -> will be start with M 1000 however when we reach C 100 this while statement will execute
      // so, we will push C (using array for O(1) push), decrease the num,  then reach V 5 push V and
      finalRoman.push(romanCharacter);
      num -= romanNumeric;
    }
  }
  return finalRoman.join("");

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
