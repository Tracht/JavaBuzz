describe("FizzBuzz", function() {

  var fizzBuzz;

  beforeEach(function () {
    fizzBuzz = new FizzBuzz();
  });

  describe('returns fizz', function() {
    it ('when passed 3', function() {
      expect(fizzBuzz.play(3)).toEqual('fizz');
    });
  });

  describe('returns fizz', function() {
    it ('for multiples of 3', function() {
      var arrayMultiplesOfThree = [3, 6, 18, 21, 24, 33, 36]
      arrayMultiplesOfThree.forEach(myFunction);
      function myFunction(value) {
        expect(fizzBuzz.play(value)).toEqual('fizz');
      };
    });
  });

  describe ('returns buzz', function () {
    it ('when passed 5', function() {
      expect(fizzBuzz.play(5)).toEqual('buzz');
    });
  });

  describe('returns buzz', function() {
    it ('for multiples of 5', function() {
      var arrayMultiplesOfFive = [5, 10, 20, 25, 35, 65]
      arrayMultiplesOfFive.forEach(myFunction);
      function myFunction(value) {
        expect(fizzBuzz.play(value)).toEqual('buzz')
      };
    });
  });

  describe ('returns javabuzz', function() {
    it ('when passed 15', function() {
      expect(fizzBuzz.play(15)).toEqual('javabuzz');
    });
  });

  describe ('returns javabuzz', function() {
    it ('for multiples of 15', function() {
      var arrayMultiplesOfFifteen = [15, 30, 45, 90]
      arrayMultiplesOfFifteen.forEach(myFunction);
      function myFunction(value) {
        expect(fizzBuzz.play(value)).toEqual('javabuzz')
      }
    });
  });

  describe ('returns "out of range"', function() {
    it ('when passed -1', function() {
      expect(fizzBuzz.play(-1)).toEqual('out of range')
    });
  });

  describe ('returns 4', function() {
    it ('when passed 4', function() {
      expect(fizzBuzz.play(4)).toEqual(4)
    })
  })

  describe('returns 0.5', function() {
    it ('when passed 0.5', function() {
      expect(fizzBuzz.play(0.5)).toEqual(0.5)
    });
  });

});

// Original Rspec
// describe 'fizzbuzz' do
// it 'returns "fizz" for the number 3 and any multiples of 3' do
//   expect(3.fizzbuzz).to eq 'fizz'
//   expect(6.fizzbuzz).to eq 'fizz'
//   expect(18.fizzbuzz).to eq 'fizz'
// end

// it 'returns "buzz" for the number 5 and any multiples of 5' do
//   array = [5, 10, 20, 25]
//   array.each do |num|
//     expect(num.fizzbuzz).to eq 'buzz'
//   end
// end
//
// it 'returns "fizzbuzz" for any mulitples of 3 & 5' do
//   array1 = [15, 30, 45]
//   array1.each do |num|
//     expect(num.fizzbuzz).to eq 'fizzbuzz'
//   end
// end
//
// it 'returns "not in range" for numbers > 100' do
//   array2 = [101, 472, 100.5]
//   array2.each do |num|
//     expect(num.fizzbuzz).to eq 'Out of limit'
//   end
// end
//
// it 'returns number if number is not a mulitple of 3 or 5' do
//   array3 = [11, 27, 57]
//   array3.each do |num|
//     expect(num.fizzbuzz).to eq num
//   end
// end
//
// it 'returns "not in range" for numbers < 1' do
//   array3 = [0, -1020, -60777]
//   array3.each do |num|
//     expect(num.fizzbuzz).to eq 'Out of limit'
//   end
// end
