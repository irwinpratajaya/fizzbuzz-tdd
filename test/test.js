var should = require('chai').should()
var fizzbuzz = require('../fizzbuzz')

describe('Testing Fizzbuzz', function() {
    it('should return FIZZ when the value 3', function() {
      fizzbuzz(3).should.equal("fizz");
    });

    it('should return BUZZ when the value 5', function() {
      fizzbuzz(5).should.equal("buzz");
    });

    it('should return FIZZBUZZ when the value 15', function() {
      fizzbuzz(15).should.equal("fizzbuzz");
    });
  });
