// Declaring variables
const backgroundColor = document.querySelector('body');
const startMessage = document.querySelector('.message');
const selectNumber = document.querySelector('.number');
const selectScore = document.querySelector('.score');
const inputField = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const highScoreDisplay = document.querySelector('.highscore');


// Random number generator

let secretNumber = Math.trunc(Math.random() * 20) + 1;


let score = 20;
let highScore = 0;

// Check button
const buttonCheck = () => {
   const inputValue = Number(inputField.value);
// we need to check if there is no input
    if (!inputValue) {
        startMessage.textContent = 'No number!'
// we need to check if the number is correct
    } else if ( inputValue === secretNumber) {
        startMessage.textContent = 'Correct Number!'
        backgroundColor.style.background = '#60b347';
        selectNumber.style.width = '30rem';
        selectNumber.textContent = secretNumber;

        if (score > highScore) {
            highScore = score;
            highScoreDisplay.textContent = highScore;
        }
       

// wen inputvalue is wrong 
    } else if (inputValue !== secretNumber) {
        if(score > 1) {
            startMessage.textContent = inputValue > secretNumber ? 'Too high!' : 'Too low!';
            score--;
            selectScore.textContent = score;
        } else {
            startMessage.textContent = 'You lost the game!'
            selectScore.textContent = 0;
        }

}
}
// button again
const buttonAgain = () => {
    console.log('Again button clicked');
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    backgroundColor.style.background = '#222';
    selectNumber.style.width = '15rem';
    inputField.value = '';
    selectNumber.textContent = '?';
    selectScore.textContent = score;
    startMessage.textContent = 'Start guessing...';
}





//Event Listeners

againButton.addEventListener('click', buttonAgain);
checkButton.addEventListener('click', buttonCheck);
