// function generateFizzBuzz(){
//   var i = 0;
//   while (i < 100) {
//     i++;
//     if (i % 3 == 0 && i % 5 == 0) {
//       return "Fizzbuzz";
//     } else if (i % 3 == 0) {
//       return "Fizz";
//     } else if (i % 5 == 0) {
//       return "Buzz";
//     } else {
//       return i;
//     }
//   }
// }
// generateFizzBuzz();

function generateFizzBuzz() {
}

generateFizzBuzz.prototype.number = function(number) {
  if (i % 3 == 0 && i % 5 == 0) {
    return 'FizzBuzz';
  } else if (i % 3 == 0) {
    return 'Fizz';
  } else if (i % 5 == 0) {
    return 'Buzz';
  } else {
    return number;
  }
}
