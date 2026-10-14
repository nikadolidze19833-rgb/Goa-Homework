const number = document.getElementById("number");
const randomBtn = document.getElementById("randomBtn");

randomBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    number.textContent = randomNumber;
});