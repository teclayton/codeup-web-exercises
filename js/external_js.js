console.log("Hello from external Javascript");

alert("Welcome to my Website!");

var color = prompt("What is your favorite color?");
console.log("Great, my favorite color is " + color + " too!");

//Movies Question

var Hercules = prompt("How many days are you renting Hercules?");
var BrotherBear = prompt("How many days are you renting Brother Bear");
var LittleMermaid = prompt("How many days are you renting Little Mermaid?");
var MovieResult = "You will spend " + (Number(Hercules) + Number(BrotherBear) + Number(LittleMermaid)) * 3 + " dollars";
alert(MovieResult);


//Contractor weekly earnings

var GooglePay = Number(prompt('What is your hourly rate at Google?'))
var AmazonPay = Number(prompt('What is your hourly rate at Amazon?'))
var FacebookPay = Number(prompt('What is your hourly rate at Facebook?'))

var GoogleHours = Number(prompt('How many hours did you work at Google?') * GooglePay);
var AmazonHours = Number(prompt('How many hours did you work at Amazon?') * AmazonPay);
var FacebookHours = Number(prompt('How many hours did you work at Facebook?') * FacebookPay);

var WeeklyEarnings = 'You have earned $' + Number(GoogleHours + AmazonHours + FacebookHours) + ' this week!';

alert(WeeklyEarnings);

//Class schedule

var classIsFull = confirm('Confirm that class is full');
var classScheduleCheck = confirm('Class schedules check out');
var studentEnrolled = !classIsFull && classScheduleCheck;
alert('Student enrollment status: ' + studentEnrolled);


//Product Offer

var NumberOfItems = prompt('Enter number of items bought: ');
var OfferIsValid = confirm('Offer is valid?');
var IsPremiumMember = confirm('Are you a premium member?');
var ProductDiscountApplied = (IsPremiumMember || Number(NumberOfItems) > 2) && OfferIsValid;

alert("Product discount status: " + ProductDiscountApplied);
