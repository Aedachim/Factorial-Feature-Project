var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('testing the output of 5! is equal to 120', () => {
      //Setup
      const expectedResult = 120;
      const inputNumber = 5;

      //Exercise
      const result = Calculate.factorial(inputNumber);
      
      //Verify
      assert.equal(result, expectedResult);
    });
    it('testing the output of 3! is equal to 6', () => {
      //Setup
      const expectedResult = 6;
      const inputNumber = 3;

      //Exercise
      const result = Calculate.factorial(inputNumber);

      //Verify
      assert.equal(result, expectedResult);
    });
    it('testing the output of 0! is equal to 1', () => {
      //Setup
      const expectedResult = 1;
      const inputNumber = 0;

      //Exercise 
      const result = Calculate.factorial(inputNumber);

      //Verify
      assert.equal(result, expectedResult);
    })
  });
});