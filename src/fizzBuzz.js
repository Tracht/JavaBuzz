class FizzBuzz {

  play(number) {
    if (number % 3 === 0 ) {
      return "fizz"
    }
    if (number % 5 === 0 ) {
      return "buzz"
    }
  }

};

// Original Ruby
// def fizzbuzz(number)
//   if number % 5 == 0 && number % 3 == 0
//     return 'fizzbuzz'
//   elsif number % 3 == 0
//     return 'fizz'
//   elsif number % 5 == 0
//     return 'buzz'
//   elsif number > 100 || number < 0
//     return "out of range"
//   else
//     return number
//   end
// end
