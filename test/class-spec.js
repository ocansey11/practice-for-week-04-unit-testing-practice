const { assert } = require("chai");
const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {

    let word;

    beforeEach(() => {
      word = new Word("testWord");
    });

    it('should have a "word" property', function () {
      expect(word).to.have.all.keys(word);
    });

    it('should set the "word" property when a new word is created', function () {
      expect(word.word).to.eql('testWord');
    });
  });

  describe("removeVowels function", function () {
    let word = new Word("testWord");

    it("should return a the word with all vowels removed", function () {
      let removeVowels = word.removeVowels()
      expect(removeVowels).to.eq('tstWrd');
    });
  });

  describe("removeConsonants function", function () {
    let word = new Word("testWord");

    it("should return the word with the consonants removed", function () {
      expect(word.removeConsonants()).to.eql('eo');
    });
  });

  describe("pigLatin function", function () {
    let word = new Word('pigLatin');
    let pigLatin = word.pigLatin()

    it("should return the word converted to pig latin", function () {
      expect(pigLatin).to.eql('igLatinpay');
    });
  });
});
