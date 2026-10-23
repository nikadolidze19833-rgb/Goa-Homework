//.parse() მეთოდი გამოიყენება ტექსტური მონაცემების (სტრიქონის) სხვა ტიპის მონაცემად გარდასაქმნელად ან გასაანალიზებლად.
//  მისი დანიშნულება დამოკიდებულია იმაზე, რომელ ენასა თუ ბიბლიოთეკაში ვიყენებთ




//.stringify() მეთოდი JavaScript-ში გამოიყენება ობიექტის ან სხვა შესაბამისი მონაცემის
//  JSON ფორმატის სტრიქონად (ტექსტად) გარდასაქმნელად.






let nameInput = document.getElementById("nameInput");
let greetButton = document.getElementById("greetButton");
let greeting = document.getElementById("greeting");


let savedName = localStorage.getItem("name");

if (savedName) {
    greeting.textContent = "გამარჯობა, " + savedName + "!";
}


greetButton.addEventListener("click", function () {
    let name = nameInput.value.trim();

    if (name === "") {
        alert("გთხოვ, შეიყვანე სახელი!");
        return;
    }

    localStorage.setItem("name", name);

    greeting.textContent = "გამარჯობა, " + name + "!";
});
