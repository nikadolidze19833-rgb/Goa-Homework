const answer = document.getElementById("answer");
const switchBtn = document.getElementById("switchBtn");

switchBtn.addEventListener("click", function() {
    if (answer.textContent === "no") {
        answer.textContent = "yes";
    } else {
        answer.textContent = "no";
    }
});