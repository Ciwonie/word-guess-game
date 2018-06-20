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
var randomWords = ['gandolf', 'yoshi', 'microsoft', 'stormtrooper', 'konichiwa', 'sevilla', 'pikachu', 'bonobo', 'bailando', 'sprezzatura'];

//initial variables
var wins = 0;
var losses = 0;
var guesses = 10;
var guessedLetters = [];

//generated variables

var computerSize;
var answer;
var answerLength;
var answerDisplay;
var letters;
var gameOver


// var computerPick = Math.floor(Math.random() * randomWords.length); //computer selects an index from 'randomWords' array
// var answer = randomWords[computerPick] // variable 'answer' is then set to equal a word from 'randwords' array based on the selected index
// var answerLength = answer.length; //'answerlength' is a number based on the length of the chosen word
// var answerDisplay = []; //this is an empty array that will display our underscores in a future function
// var letters = answer.split(''); // this takes the word chosen from 'answer' and splits it into an array of divided characters

function initialize() {
    computerSize = Math.floor(Math.random() * randomWords.length);
    answer = randomWords[computerSize];
    answerLength = answer.length;
    answerDisplay = [];
    letters = answer.split('');
    guesses = 10;
    guessedLetters = [];
    gameOver = false;
    

    for (var i = 0; i < answer.length; i++) {
        answerDisplay[i] = '_';
        console.log(answerDisplay);
    };

    document.getElementById('blanks').innerHTML = "Fill in the word: " + answerDisplay.join(" ");
    document.getElementById('guesses').innerHTML = "Letters guessed: " + guessedLetters;
};

// this for loop will generate an array filled with underscores equal to the length of 'answer'


//Initalizing a function from keypress. This begins the game.
document.addEventListener('keypress', function (event) {

    if (gameOver) {
        initialize();
    }

    else {
        //set user input to lower case
        userGuess = event.key.toLowerCase();
        console.log(userGuess);

        //a helpful hint for this excruciating word, if it's selected
        // if (answer === randomWords[10]) {
        //     document.getElementById('hint').innerHTML = "Hint: this is a looooooooooooong word";
        // }
        //if the user guesses a letter that is not in the array, this will push it and display it on screen as an incorrect guess
        if (letters.indexOf(userGuess) === -1) {
            guessedLetters.push(userGuess);
            guesses--;
            console.log(guesses);
        }
        //will loop through 'letters' array, comparing each index by the letter guessed. If true, guessed letter will be displayed at that index
        for (var i = 0; i < answer.length; i++) {
            if (userGuess === letters[i]) {
                answerDisplay[i] = userGuess;
            }
        }
        //this is the win condition. when the letters guessed matched the answer, the user will win. 
        if (answerDisplay.join("") === answer) {
            wins++;
            gameOver = true;
            document.getElementById('correctWord').style.color = '#82FF9E';
            document.getElementById('correctWord').innerHTML = 'Solution: ' + answer;
        }
        //lose condition when number of guesses drops to zero
        if (guesses === 0) {
            losses++;
            gameOver = true;
            document.getElementById('correctWord').style.color = '#F55D3E';
            document.getElementById('correctWord').innerHTML = 'Solution: ' + answer;
        }

        //alter html with letters guessed
        document.getElementById('blanks').innerHTML = "Fill in the word:  " + answerDisplay.join(" ");
        document.getElementById('guesses').innerHTML = "Letters guessed:  " + guessedLetters;
        document.getElementById('winRatio').innerHTML = "Wins:  " + wins;
        document.getElementById('lossRatio').innerHTML = 'Losses:  ' + losses;
        document.getElementById('remaining').innerHTML = 'Attempts:  ' + guesses;
    }
});

//Struggling with a reset function. I'd like something that resets the computerPick, guesses, and displays whenever a win/lose is recorded.
// function reset () {
//     computerPick = Math.floor(Math.random() * randomWords.length);
//     answerDisplay = [];
//     guessedLetters = [];
//     guesses = 8;
// };