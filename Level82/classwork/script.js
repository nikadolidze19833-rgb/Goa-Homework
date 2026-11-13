
const button = document.getElementById("btn");
const paragraph = document.getElementById("fact");

button.addEventListener("click", () => {
    fetch("https://catfact.ninja/fact")
        .then(response => response.json())
        .then(data => {
            paragraph.textContent = data.fact;
        })
        .catch(error => {
            console.log("error:", error);
        });
});



