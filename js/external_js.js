// console.log("Hello from external Javascript");
//
// alert("Welcome to my Website!");
//
// var color = prompt("What is your favorite color?");
// console.log("Great, my favorite color is " + color + " too!");

//Movies Question
//
// var Hercules = prompt("How many days are you renting Hercules?");
// var BrotherBear = prompt("How many days are you renting Brother Bear");
// var LittleMermaid = prompt("How many days are you renting Little Mermaid?");
// var MovieResult = "You will spend " + (Number(Hercules) + Number(BrotherBear) + Number(LittleMermaid)) * 3 + " dollars";
// alert(MovieResult);
//
//
// //Contractor weekly earnings
//
// var GooglePay = Number(prompt('What is your hourly rate at Google?'))
// var AmazonPay = Number(prompt('What is your hourly rate at Amazon?'))
// var FacebookPay = Number(prompt('What is your hourly rate at Facebook?'))
//
// var GoogleHours = Number(prompt('How many hours did you work at Google?') * GooglePay);
// var AmazonHours = Number(prompt('How many hours did you work at Amazon?') * AmazonPay);
// var FacebookHours = Number(prompt('How many hours did you work at Facebook?') * FacebookPay);
//
// var WeeklyEarnings = 'You have earned $' + Number(GoogleHours + AmazonHours + FacebookHours) + ' this week!';
//
// alert(WeeklyEarnings);

//Class schedule

// var classIsFull = confirm('Confirm that class is full');
// var classScheduleCheck = confirm('Class schedules check out');
// var studentEnrolled = !classIsFull && classScheduleCheck;
// alert('Student enrollment status: ' + studentEnrolled);
//
//
// //Product Offer
//
// var NumberOfItems = prompt('Enter number of items bought: ');
// var OfferIsValid = confirm('Offer is valid?');
// var IsPremiumMember = confirm('Are you a premium member?');
// var ProductDiscountApplied = (IsPremiumMember || Number(NumberOfItems) > 2) && OfferIsValid;
//
// alert("Product discount status: " + ProductDiscountApplied);



// Write a function, isShortWord, that takes in a string and returns the boolean value true if the passed argument is shorter than 5 characters. Return false otherwise.

function isShortWord(string) {
    return string.length < 5;
}

console.log(isShortWord('sssssssssssssss'));
console.log(isShortWord('sho'));

// Write a function, isSameLength, that takes in two string inputs and returns the boolean value true if the passed arguments are the same length. Return false otherwise.

// function isSameLength(str1, str2) {
//     return str1.length === str2.length;
// }
//
// console.log(isSameLength('bob', 'cat'));
// console.log(isSameLength('bob', 'things'));
//
//
// // Write a function, getSmallerSegment, that takes in a string and a number input. The function should return a substring of the first argument that is as many characters long as the second argument in lowercase.
//
// function getSmallerSegment(string, number) {
//     return string.substring(0, number).toLowerCase();
// }
//
// console.log(getSmallerSegment('Codeup', 3));
// console.log(getSmallerSegment('whaddup', 5));

// example input: getSmallerSegment("Codeup", 3)
// example output: "cod"



//============SCOPE===================

//
// var globalVar = "Look, I'm Global";
//
// function scopeExample() {
//     var localVar = "Look, I'm local";
//     alert(localVar);
//     alert(globalVar);
// }
//
// scopeExample();

var x = 300;
var y = 100;

function scopeExample2(x, y) {
    var x = 1;
    var y = 2;
    console.log('x: ' + x + ' y: ' + y);
    return x+y;
}
scopeExample2();
console.log('x: ' + x + ' y: ' + y);

//FUNCTION WITH SIDE EFFECTS:

var word = "hello";

function shoutWord() {
    return word.toUpperCase();
}

//IIFE Immediately invoked function expression

(function () { // this goes at the beginning of the script

})(); // this goes at the very bottom. prevents functions from being overwritten