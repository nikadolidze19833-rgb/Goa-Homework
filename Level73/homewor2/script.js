
let button = document.getElementById("clickButton");
let counter = document.getElementById("counter");


let clicks = Number(localStorage.getItem("clicks")) || 0;


counter.textContent = clicks;


button.addEventListener("click", function () {
    clicks++;


    localStorage.setItem("clicks", clicks);

    
    counter.textContent = clicks;
});
