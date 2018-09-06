// Setup game for instructions and for the user to guess a letter
// Choosing a random word.
// Create an array of words.
    var words = [
        "development",
        "programming",
        "javascript",
        "awesome",
        "atlanta",
        "falcons"
    ];
 // Choosing a random word.
    var word = words[Math.floor(Math.random() * words.length)];
//The user presses a key
document.onkeyup = function(event){
    var letterGuess = String.fromCharCode(event.which).toLowerCase()
    console.log('Letter pressed ===>', letterGuess)
    console.log('This is the event ==>', event)
}
//The program verifies that the letter is a letter within that word or if it is not a letter within that word.

//The program determines if the letter is correct in the word or it is not correct within the word.

//If letter is correct it displays the letter on the underscore.

    //The player does not lose a guess

    //The player wins if the player keeps guessing the correct letter within the word or the word itself.

//If the letter is not correct the user loses a choice and the program displays the letter that they guess incorrect.
    
    //If the letter is incorrect the player loses a guess.

    //If the letter is incorrect the game displays the incorrect letter for their guess.

    //If the player keeps guessing the incorrect letter the player loses.

    document.onkeyup = function(event){
        var letterGuess = String.fromCharCode(event.which).toLowerCase()
        console.log('Letter pressed ===>', letterGuess)
        console.log('This is the event ==>', event)
    }