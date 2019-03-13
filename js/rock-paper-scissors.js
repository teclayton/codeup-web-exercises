//Rock, paper, scissors array options and function to determine computer's choice
const options = ['rock', 'paper', 'scissors']; //Computer choice determined by index

let computerChoice = function (){
    let random = Math.round(Math.random() * (options.length - 1));
    return random;
};

//Keyboard event listeners for user choices
let rawk = 65;
let payper = 83;
let sihzerz = 68;


//Function checks your choice against the computers choice and determines if the game is win, lose, or draw
$('#game-outcome').keypress(function(event){
    if (event.which === rawk) {
        switch (computerChoice) {
            case 0:
                $('#game-outcome').html('Draw');
                break;
            case 1:
                this.html('Lose');
                break;
            case 2:
                this.html('Win');
                break;
        }
    } else if (event.which === payper) {
            switch (computerChoice) {
                case 0:
                    this.html('Win');
                    break;
                case 1:
                    this.html('Draw');
                    break;
                case 2:
                    this.html('Lose');
                    break;
            }
    } else if (event.which === sihzerz){
            switch (computerChoice) {
                case 0:
                    this.html('Lose');
                    break;
                case 1:
                    this.html('Win');
                    break;
                case 2:
                    this.html('Draw');
                    break;
            }
    }
});