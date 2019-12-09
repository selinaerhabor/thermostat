
describe('generateFizzBuzz', function() {

  var generateFizzBuzz;

  beforeEach(function() {
    generateFizzBuzz = new generateFizzBuzz();
  });

  describe('multiples of 3', function() {
    it('fizzes for 3', function() {
      expect(generateFizzBuzz.number(3)).toEqual('Fizz');
    });

    it('fizzes for 6', function() {
      expect(fizzBuzz.play(6)).toEqual('Fizz');
    });
  });

  // describe('multiples of 5', function() {
  //   it('buzzes for 5', function() {
  //     expect(fizzBuzz.play(5)).toEqual('Buzz');
  //   });
  //
  //   it('buzzes for 10', function() {
  //     expect(fizzBuzz.play(100)).toEqual('Buzz');
  //   });
  // });
  //
  // describe('multiples of 3 and 5', function() {
  //   it('fizzbuzzes for 15', function() {
  //     expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
  //   });
  //
  //   it('fizzbuzzes for 30', function() {
  //     expect(fizzBuzz.play(30)).toEqual('FizzBuzz');
  //   });
  // });
  //
  // describe('all other numbers', function() {
  //   it('1 for 1', function() {
  //     expect(fizzBuzz.play(1)).toEqual(1);
  //   });
  //
  //   it('11 for 11', function() {
  //     expect(fizzBuzz.number(11)).toEqual(11);
  //   });
  // });
});
describe("Display numbers from 1 to 100", function() {
  //Variables
  function generateFizzBuzz(){
  var i = 0;
  while (i < 100) {
    i++;
    if (i % 3 == 0 && i % 5 == 0) {
      return "Fizzbuzz";
    } else if (i % 3 == 0) {
      return "Fizz";
    } else if (i % 5 == 0) {
      return "Buzz";
    } else {
      return i;
    }
  }
}

  it("returned list of numbers 1 to 100", function() {
      expect(i).toBeGreaterThanOrEqual(100);
  });
});
