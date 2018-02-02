const chai = require('chai');
const cases = require('../src/app.js');
const expect = chai.expect;
const assert = chai.assert;

describe('Cases from app.js', () => {
  // this is a testing suite made up of suites.

  describe('apples', () => {
    const apples = cases.apples;
    it('should be an array', () => {
      
      expect(apples).to.be.an('array'); // Begin here something is wrong, fix it.
    });
    // write a test to check the correct length of the apples array.
    // write a test to check to see if the apples array contains 'Red Delicious'.
    it ('should be length of 4', () => {
      
      expect(apples).to.include.lengthOf(4);
    
  });
it(`should have 'red delicious`, ()=> {
  expect(apples).to.include('Red Delicious');
});
});
describe('Ben', () => {
    it('should be an object', () => {
      const Ben = cases.Ben;
      expect(Ben).to.be.an('object');
    });
    // write a test to check if Ben's favorite band is 'Beastie Boys'.
    it('should be equal to')
  });

  describe('Sean', () => {
    it('should be an object', () => {
      const Sean = cases.Sean;
      expect(Sean).to.be.an('object');
    });
    // write a test to check if Seans's favorite food is 'Pizza'.
  });

  describe('Ryan', () => {
    it('should be an object', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.be.an('object');
    });
    // write a test to see if Ryan's favBook is `not` 'Harry Potter'.
  });

  describe('Austen', () => {
    it('should be an object', () => {
      const Austen = cases.Austen;
      expect(Austen).to.be.an('object');
    });
    // write a test to see if Austen's favColor is not 'Gold'.
  });

  describe('Ivan', () => {
    it('should be an object', () => {
      const Ivan = cases.Ivan;
      expect(Ivan).to.be.an('object');
    });
    // write a test to check if Ivan's favActivity is 'Rock Climbing'.
  });
});
