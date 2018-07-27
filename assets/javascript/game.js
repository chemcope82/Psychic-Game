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
        wins++;
        document.getElementById("wins").textContent = "Wins: " + wins;
        computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)]
        guessesLeft = 10;
        document.getElementById("guessesLeft").textContent = "Guesses Left: " + guessesLeft;
        guessedLetters = "";
        document.getElementById("guessedLetters").textContent = "Guessed Letters: " + guessedLetters; 
        alert("Correct! The letter was " + userGuess);
    }
    else if (!guessedLetters.includes(userGuess)){
        guessesLeft--;
        document.getElementById("guessesLeft").textContent = "Guesses Left: " + guessesLeft;
        guessedLetters += userGuess;
        document.getElementById("guessedLetters").textContent = "Guessed Letters: " + guessedLetters; 
    }
    if (guessesLeft < 1) {
        losses++;
        document.getElementById("losses").textContent = "Losses: " + losses;
        computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)]
        guessesLeft = 10;
        document.getElementById("guessesLeft").textContent = "Guesses Left: " + guessesLeft;
        guessedLetters = "";
        document.getElementById("guessedLetters").textContent = "Guessed Letters: " + guessedLetters; 
        alert("Sorry, the letter was " + computerPick);
    }

}