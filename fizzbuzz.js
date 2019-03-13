//divisible by 3: fizz
//divisible by 5: buzz
//both: fizzbuzz
//else, consolelog number



function fizzBuzz(num) {
    for (var i = 0; i < 100; i++) {
        if (i % 15 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz') ;
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}
fizzBuzz();




