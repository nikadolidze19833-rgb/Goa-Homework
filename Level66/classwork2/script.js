const input = document.getElementById("textInput");
const button = document.getElementById("countButton");
const result = document.getElementById("result");

button.addEventListener("click", function () {
    const text = input.value;

    const letters = text.split("");

    const count = letters.length;

    result.textContent = "ასოების რაოდენობა: " + count;
});
