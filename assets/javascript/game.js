//Psychic Game 

var computerChoices = "abcdefghijklmnopqrstuvwxyz";

var computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)]

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = "";



document.onkeyup = function() {

    var userGuess = event.key;

    if (userGuess === computerPick) {
        alert("Correct! The letter was " + userGuess)
        wins++;
        document.getElementById("wins").textContent = "Wins: " + wins;
        guessesLeft = 10;
        document.getElementById("guessesLeft").textContent = "Guesses Left: " + guessesLeft;
        guessedLetters = "";
        document.getElementById("guessedLetters").textContent = "Guessed Letters: " + guessedLetters; 
        computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)]
        ;
    }
    else if (!guessedLetters.includes(userGuess)){
        guessesLeft--;
        document.getElementById("guessesLeft").textContent = "Guesses Left: " + guessesLeft;
        guessedLetters += userGuess;
        document.getElementById("guessedLetters").textContent = "Guessed Letters: " + guessedLetters; 
    }
    if (guessesLeft < 1) {
        alert("Sorry, the letter was " + computerPick);
        losses++;
        document.getElementById("losses").textContent = "Losses: " + losses;
        guessesLeft = 10;
        document.getElementById("guessesLeft").textContent = "Guesses Left: " + guessesLeft;
        guessedLetters = "";
        document.getElementById("guessedLetters").textContent = "Guessed Letters: " + guessedLetters; 
        computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)]
    }

}