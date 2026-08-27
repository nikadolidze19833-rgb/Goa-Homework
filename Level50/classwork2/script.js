let randomNumber = Math.floor(Math.random() * 5) + 1;

let userGuess = Number(prompt("შეიყვანე რიცხვი 1-დან 5-მდე:"));

if (userGuess === randomNumber) {
    console.log("გამოიცანი!");
} else {
    console.log("ვერ გამოიცანი, ჩაფიქრებული იყო: " + randomNumber);
}
