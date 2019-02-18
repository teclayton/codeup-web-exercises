var input;

while(true) {
    input = prompt('Please enter an odd number from 1 - 50');
    if (isNaN(input)) {
        alert('That is not a Number. Please try again.');
        continue;
    }
    if (input < 1 || input > 50) {
        alert('Number is out of range. Please try again.');
        continue;
    }
    if (input %2 === 0) {
        alert('Please enter an odd number.');
        continue;
    }
    else {
        break;
    }
}

for (var w = 1; w <= 50; w++) {
    if (w % 2 === 0){
        continue;
    }
    if (w == input){
        console.log('Yikes! Skipping number: ' + w);
    }
    else {
        console.log('Here is an odd number: ' + w);
    }
}

