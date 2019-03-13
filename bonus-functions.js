"use strict";

function isOdd(number){
    return !(number%2 === 0)
}
function isEven(number) {
    return number%2 === 0;
}
function identity(input) {
    return input
}
function isFive(input) {
    return input === 5
}
function addFive(input) {
    return input + 5
}
function isMultipleOfFive(input) {
    return input%5 === 0
}
function isThree(input) {
    return input === 3
}
function isMultipleOfThree(input) {
    return input%3 === 0
}

function isMultipleOfThreeAndFive(input) {
    return (input%5 === 0) && (input%3 === 0);
}
function isMultipleOf(target,n) {
    return (target%n) === 0;
}
function isTrue(boolean) {
    return boolean === true;
}
function isFalse(boolean) {
    return boolean === false;
}
function isTruthy(input) {

}
function isFalsy(input) {

}
function isVowel(letter) {
    return (letter === "a") || (letter ==="e") || (letter === "i") || (letter === "o") || (letter === "u");
}
function isConsonant(letter) {
    return (letter !== "a" && letter !=="e" && letter !== "i" && letter !== "o" && letter !== "u");
}
function isCapital(letter) {
    return letter === letter.toUpperCase();
}
function isLowerCase(letter) {
    return letter === letter.toLowerCase();
}
function hasLowerCase(string) {
        return (/[a-z]/.test(string));
}
function isSpace(letter) {
    return letter === ' ';
}
function isZero(number) {
    return number === 0;
}
function notZero(number) {
    return number !== 0;
}
function lowerCase(string) {
    return (string).toLowerCase();
}
function