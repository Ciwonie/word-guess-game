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
var randomWords = ['gandolf', 'yoshi', 'microsoft','stormtrooper', 'konichiwa', 'sevilla', 'pikachu'];

//initial variables
var wins = 0;
var losses = 0;
var guesses = 8;
var guessedLetters = [];

//generated variables

var computerPick = Math.floor(Math.random() * randomWords.length);
var answer = randomWords[computerPick]
var length = answer.length;
var display = [length];
var win = length;
var letters = answer.split('');
var output = '';

// var userLetter = ''; we're going to obtain this from the eventlistener


reset(); //will add a reset function at bottom of page

//Initalizing a function from keypress. This begins the game.
document.addEventListener('keypress', function(event) {

    userGuess = event.key.toLowerCase();

    for (var i = 0; i < answer.length; i++) {
        display[i] = '_ ';
        
    }


    

});