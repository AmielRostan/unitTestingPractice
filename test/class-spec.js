const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  let word;

  beforeEach(function () {
    word = new Word('example');
  });

  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(word).to.have.deep.keys({word: 1});
    });

    it('should set the "word" property when a new word is created', function () {
      expect(word).to.be.not.empty;
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      let test = new Word('example');

      expect(test.word).to.be.equal('example');
      test.word = test.removeVowels();
      expect(test.word).to.be.equal('xmpl');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      let test = new Word('example');

      expect(test.word).to.be.equal('example');
      test.word = test.removeConsonants();
      expect(test.word).to.be.equal('eae');
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      let test = new Word('apple');

      expect(test.word).to.be.equal('apple');
      test.word = test.pigLatin();
      expect(test.word).to.be.equal('appleyay');

      test.word = 'pineapple';

      expect(test.word).to.be.equal('pineapple');
      test.word = test.pigLatin();
      expect(test.word).to.be.equal('ineapplepay');
    });
  });
});
