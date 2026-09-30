
// ID
let first = document.getElementById("hi");

// Class
let second = document.getElementsByClassName("meh")[0];

// Tag
let third = document.getElementsByTagName("p")[2];


first.style.color = "red";
first.style.backgroundColor = "yellow";
first.style.fontSize = "25px";
first.style.fontStyle = "italic";
first.textContent = "1st changed text";



second.style.color = "blue";
second.style.backgroundColor = "lightgreen";
second.style.fontSize = "30px";
second.style.fontWeight = "bold";
second.textContent = "2nd changed text";



third.style.color = "white";
third.style.backgroundColor = "purple";
third.style.fontSize = "20px";
third.textContent = " 3rd changed text";

