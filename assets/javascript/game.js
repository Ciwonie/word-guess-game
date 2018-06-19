// 1. [Watch the demo](hangman-game-demo.mov).

// 2. Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!

// 3. Use key events to listen for the letters that your players will type.

// 4. Display the following on the page:

// 5. Press any key to get started!

// 6. Wins: (# of times user guessed the word correctly).

//    * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.

//    * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

// 7. Number of Guesses Remaining: (# of guesses remaining for the user).

// 8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

// 9. After the user wins/loses the game should automatically choose another word and make the user play it.

//Computer will randomly select one of these words
var randomWords = ['gandolf', 'yoshi', 'microsoft', 'stormtrooper', 'konichiwa', 'sevilla', 'pikachu', 'bonobo','bailando','sprezzatura', 'supercalifragilisticexpialidocious'];

//initial variables
var wins = 0;
var losses = 0;
var guesses = 8;
var guessedLetters = [];

//generated variables

var computerPick = Math.floor(Math.random() * randomWords.length); //computer selects an index from 'randomWords' array
var answer = randomWords[computerPick] // variable 'answer' is then set to equal a word from 'randwords' array based on the selected index
var answerLength = answer.length; //'answerlength' is a number based on the length of the chosen word
var answerDisplay = []; //this is an empty array that will display our underscores in a future function
var letters = answer.split(''); // this takes the word chosen from 'answer' and splits it into an array of divided characters


// this for loop will generate an array filled with underscores equal to the length of 'answer'
for (var i = 0; i < answer.length; i++) {
    answerDisplay[i] = '_';
    console.log(answerDisplay);
};

//Initalizing a function from keypress. This begins the game.
document.addEventListener('keypress', function (event) {

    userGuess = event.key.toLowerCase();
    console.log(userGuess);

    // this is our win condition
    if (answer === randomWords[10]) {
        document.getElementById('hint').innerHTML = "Hint: this is a looooooooooooong word";
    }

    if (letters.indexOf(userGuess) === -1) {
        guessedLetters.push(userGuess);
        guesses--;
        console.log(guesses);
    }

    for (var i = 0; i < answer.length; i++) {
        if (userGuess === letters[i]) {
            answerDisplay[i] = userGuess;
        }
    }

    if (answerDisplay.join("") === answer) {
        alert('you win');
        wins++;
    }

    if (guesses === 0) {
        losses++;
        alert('you lose');
    }

    document.getElementById('blanks').innerHTML = "Fill in the blank: " + answerDisplay.join(" ");
    document.getElementById('guesses').innerHTML = "Guesses: " + guessedLetters;
});

//Struggling with a reset function. I'd like something that resets the computerPick, guesses, and displays whenever a win/lose is recorded.
// function reset () {
//     computerPick = Math.floor(Math.random() * randomWords.length);
//     answerDisplay = [];
//     guessedLetters = [];
//     guesses = 8;
// };