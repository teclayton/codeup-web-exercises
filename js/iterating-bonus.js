// 1.  create an array of shapes
// – prompt the user to search for a specific shape
// – using a for loop, iterate through the array to log the shapes until the matching shape is found
// – once the shape is found, log a message (“Shape is found”) and use a break statement to exit loop.

// 2.  Create a function that returns a random day of the week

// 3.  Create a function that takes a single letter and returns what number the letter is in the alphabet. Ignore case.
// – someFunction("a") // returns 1
// – someFunction("z") // returns 26

// 4.  Create a function that returns the longest string in a given array of string elements.

// 5.   Create a function that takes in two arrays of elements, including numbers. If all numbers added
// together in the first array is equal to all the number inputs added in the second array, return true,
// otherwise, false. Only add together numeric elements but either array may contain non-numeric elements.

// – var arr1 = ['bob', 1, true, 1, 2];
// – var arr2 = [2, null, undefined, 0, 2, "apple"]
// – exampleFunction(arr1, arr2) // returns true

// var shapes = ['circle','square', 'trapezoid'];
// var userShape = prompt('Which shape would you like to search for?');
// for(i = 0; i < shapes.length; i++) {
//     if (userShape === shapes[0] || userShape === shapes[1] || userShape === shapes[2]) {
//         console.log('Shape is found');
//         break
//     }
//     else {
//     alert('Shape not found. Please try again.');
//    if (userShape === shapes[0] || userShape === shapes[1] || userShape === shapes[2]) {
//         console.log('Shape is found');
//     break
//     }}
// }

////////////////


function randDay() {
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return days[Math.floor(Math.random() * days.length)];
}
console.log(randDay());

///////////////

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
function alphabetSpot(letter) {
    var ignoreCase = letter.toLowerCase();
    return alphabet.indexOf(ignoreCase);
}
console.log(alphabetSpot('b'));
console.log(alphabetSpot('J'));
console.log(alphabetSpot('z'));
console.log(alphabetSpot('W'));

/////////////

var movies = ['Grease', 'The Departed', 'Superbad'];

function longestString(stringLength) {
    var max = stringLength[0].length;
   stringLength.map(v => max = Math.max(max, v.length));
    result = stringLength.filter(v => v.length === max);
    return result;
}
console.log(longestString(movies));

////////////

// 5.   Create a function that takes in two arrays of elements, including numbers. If all numbers added
// together in the first array is equal to all the number inputs added in the second array, return true,
// otherwise, false. Only add together numeric elements but either array may contain non-numeric elements.

// – var arr1 = ['bob', 1, true, 1, 2];
// – var arr2 = [2, null, undefined, 0, 2, "apple"]
// – exampleFunction(arr1, arr2) // returns true

var array1 = ['Munster', 4, 2, 5];
var array2 = [1, 2, 6, 2, 'potato'];

arrSum = function(arr) {
    return arr.reduce(function (a, b) {
        return a + b
    }, 0);
}
console.log(arrSum(array1));
