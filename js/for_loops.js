
function showMultiplicationTable(x) {
    var b;
    for (var i = 1; i <= 10; i++) {
        b = x * i;
        console.log(x + ' x ' + i + ' = ' + b);
    }
}


for (var i = 1; i <= 10; i++) {
    var randomNumber = Math.floor(Math.random() * 180) + 20;
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + ' is even.');
    } else {
        console.log(randomNumber + ' is odd.');
    }
}

for (var r = 1; r < 10; r++) {
    var print = '';
    for (var j =1; j <= r; j++) {
        print += r;
    }
    console.log(print);
}

for (var y = 100; y >=5; y-= 5) {
    console.log(y);
}