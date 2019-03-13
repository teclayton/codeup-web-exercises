"use strict";

$(document).ready(function() {
    console.log( 'Ready to play.' );
});
var test = 'string';
var konami = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeft", "ArrowRight", "b", "a", "Enter"];
var input = [];
$(document).keyup(function(event){
    console.log(event.key);
    input.push(event.key);
    input.splice(-konami.length - 1, input.length - konami.length);
    if(console.log(konami) === console.log(input)) {
        console.log('yup');
    }
    console.log(input);

});



// var a = ['a', 'b', 'c', 'd', 'e'];
// var iterator = a.values();
//
// console.log(iterator.next().value); // a

// $(document).keyup(function(event){
//     if (event.which === konami.every) {
//         console.log('yea');
//     }
// });

// var ages = [32, 33, 16, 40];
//
// function checkAdult(age) {
//     return age >= 18;
// }
//
// function myFunction() {
//     document.getElementById("demo").innerHTML = ages.every(checkAdult);
// }


// alert('You suck! Try again nerd!');



// function konami () {
//         var konamikeys = [38,38,40,40,37,39,37,39,66,65, 13],
//             started = false,
//             count = 0;
//
//         $(document).keydown(function(e){
//             var reset = function() {
//                 started = false;
//                 count = 0;
//                 return;
//             };
//
//             var key = e.key;
//
//             // Begin watching if first key in sequence was pressed.
//             if(!started){
//                 if(key === 38){
//                     started = true;
//                 }
//             }
//
//             // If we've started, pay attention to key presses, looking for right sequence.
//             if (started){
//
//                 if (konamikeys[count] === key){
//                     count++;
//                 } else {
//                     // Incorrect key, restart.
//                     reset();
//                 }
//                 if (count === 10){
//                     // Success!
//                     alert('Konami code entered! Do something cool here.');
//                     reset();
//                 }
//             } else {
//                 reset();
//             }
//         });
// }
//
