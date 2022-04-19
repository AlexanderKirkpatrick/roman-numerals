function romanNumeralConverter(number) {
  if (number === 1) {
    return "I";
  } else if (number === 5) {
    return "V";
  } else {
    return "sorry";
  }
};

function iAndV(number) {
  const romanNumerals = ["I", "V"];
};

/* var myObject = { 'a': 1, 'b': 2, 'c': 3 };

Object.keys(myObject).map(function(key, index) {
  myObject[key] *= 2;
});

console.log(myObject);
// => { 'a': 2, 'b': 4, 'c': 6 } */

const romanNumerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const numeralKeys = Object.keys(romanNumerals);

for (const key of Object.keys(romanNumerals)) {
  console.log(key + ":" + romanNumerals[key])
}

var romanMatrix = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];

function convertToRoman(num) {
  if (num === 0) {
    return '';
  }
  for (var i = 0; i < romanMatrix.length; i++) {
    if (num >= romanMatrix[i][0]) {
      return romanMatrix[i][1] + convertToRoman(num - romanMatrix[i][0]);
    }
  }
}