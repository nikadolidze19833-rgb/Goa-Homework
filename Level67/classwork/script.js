function showText(number, button) {
let answer = document.getElementById("answer");

if (answer.style.display === "none") {

answer.style.display === "block";

button.textConent = "-";


} else {
    answer.style.display = "none";

button.textConent = "+";

}

}