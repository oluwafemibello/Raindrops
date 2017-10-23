const assert = require('chai').assert;
const checkPrimeExist = require('../src/main.js').checkPrimeExist;

describe("Factorial", function() {

	describe("handle valid input", function() {
		it("should return 'Plong' as raindrop-speak for 28", function() {
			assert.equal(checkPrimeExist(28), 'Plong');
		})
	})

		describe("handle valid input if it have no prime factor", function() {
		it("should return 4 as raindrop-speak for 4", function() {
			assert.equal(checkPrimeExist(4), 4);
		})
	})

	describe("handle valid input is 0", function() {
		it("should return 0 for 0 have no Prime Factor as raindrop-speak for 0", function() {
			assert.equal(checkPrimeExist(0), '0 have no Prime Factor');
		})
	})

		describe("handle valid input for Prime Number Tested for", function() {
		it("should return 'Plong' as raindrop-speak for 7", function() {
			assert.equal(checkPrimeExist(7), 'Plong');
		})
	})

		describe("handle valid input for Prime number greater than 7", function() {
		it("should return 11 as raindrop-speak for 11", function() {
			assert.equal(checkPrimeExist(11), 11);
		})
	})

	describe("handle invalid input", function() {
		it("should return undefined as raindrop-speak for -5", function(){
			assert.equal(checkPrimeExist(-5), 'undefined');
		})
	})

	describe("handle if invalid input is empty", function() {
		it("should return undefined as raindrop-speak for empty", function(){
			assert.equal(checkPrimeExist(), 'undefined');
		})
	})

	describe("handle invalid input for Object", function() {
		it("should return undefined as raindrop-speak for {a: 1}", function(){
			assert.equal(checkPrimeExist({a: 1}), 'undefined');
		})
	})

	describe("handle invalid input for string", function() {
		it("should return undefined as raindrop-speak for string", function(){
			assert.equal(checkPrimeExist('string'), 'undefined');
		})
	})

	describe("handle invalid input for decimal", function() {
		it("should return undefined as raindrop-speak for decimal", function(){
			assert.equal(checkPrimeExist(12.56), 'undefined');
		})
	})


})