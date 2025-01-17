import { splitIntoWords, isSpelledRight, addWord } from "../src/modules/spell-checker.js"; //The module under test
import assert from "assert"; //Utilities to help the test


//These tests us a framework named Mocha https://mochajs.org/#getting-started
// "describe" and "it" are part of the mocha framework.

describe("SpellCheck tests", function () {

    //Describe tests for the splitter function
    describe("Word Split Tests", function () {

        //One example test
        it("Correctly splits the example string.", function () {
            let string = "Hello, friend!";
            let expectedResult = ['Hello', ', ', 'friend', '!'];

            //assert.deepEqual tests that two arrays have the same CONTENTS
            assert.deepEqual(splitIntoWords(string), expectedResult);
        });

    });

    describe("Spell Check Tests", function () {

        it("Reports that banana is spelled right", function () {
            assert.ok(isSpelledRight("banana"));
        });

        it("Reports that Pikachu is misspelled", function () {
            assert.ok(!isSpelledRight("Pikachu"));
        });

        it("Reports that Abner is spelled right", function () {
            assert.ok(isSpelledRight("Abner"));
        });

        it("Reports that Acheson is spelled right", function () {
            assert.ok(isSpelledRight("Acheson"));
        });


    });

    describe("Spell Check add words Tests", function () {
        it("Finds the word samsquanch after adding it", function () {
            assert.ok(!isSpelledRight("samsquanch")); //Does not find the word
            addWord("samsquanch");
            assert.ok(isSpelledRight("samsquanch")); //Does find the word
        });

        //On the website the word "bro" has a red mark under it 
    
        it("Finds the word bro after adding it", function () {
            assert.ok(!isSpelledRight("bro")); //Does not find the word
            addWord("bro");
            assert.ok(isSpelledRight("bro")); //Does find the word
        });
        
    });

});

