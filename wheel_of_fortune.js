// wheel_of_fortune.js
// CoderGirl WebDev (Winter 2019) — LaunchCode

// VARIABLES /////////////////////////////////////////////////////////

// In a normal application you would ask for user input.
// In this exercise we will set the variables ourselves.

// Set a secret word!

var word = 'ANSWER'; // ALL CAPS
var guessArray = []
for (var i = 0; i < word.length; i ++)
    guessArray.push('-')

// Ask player if they would like to guess a letter or guess the
// solution.

var isGuessingLetter = false; // set to false to guess solution

// If they are guessing a letter, set the letter that they are
// guessing. If they are guessing the word, then set the word
// as their guess.

var guess = 'Answer'; // UPPERCASE


// SCRIPT ////////////////////////////////////////////////////////////

if (isGuessingLetter === true) {
    for(i = 0, j = word.length; i < j; i++) {
        if (guess.toUpperCase() === word[i]) {
            guessArray[i] = guess.toUpperCase();
            console.log(guessArray);
            break;
        }
    } if (guess.toUpperCase() !== word[i]) {
        console.log('Sorry, no ' + guess.toUpperCase() + '!');
    }
} else if (isGuessingLetter === false && guess.toUpperCase() === word) {
    console.log('Congratulations! You won Wheel of Fortune!')
} else if (isGuessingLetter === false && guess.toUpperCase() !== word) {
    console.log('Nope, keep trying!')
}


// If guessing a letter...

	// If the word contains the letter...

		// Print back the word with all instances of that letter revealed.

	// If the word does not contain the letter...

		// Print back "Sorry, no <letter>!" but with <letter> replaced by the player's guess.

// If guessing the word...

	// If they are correct...

		// Print "Congratulations! You won Wheel Of Fortune!"

	// If they are incorrect...

		// Print back "Nope, keep trying!"

// End of script!
