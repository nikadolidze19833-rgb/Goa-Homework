setTimeout(() => {
    console.log("Info Printed");
}, 3000);


setTimeout(() => {
    console.log("Hello world");
}, 5000);


function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("You are an adult");
        } else {
            reject("You are a child");
        }
    });
}

checkAge(20)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });

    //ES6-ჯავასკრიპტის ბოლო განახლება რომელიც გამოვიდა 2015 წელს.



    // Rest (...) ოპერატორი გამოიყენება რამდენიმე არგუმენტის ან ელემენტის
// ერთ მასივში ან ობიექტში შესაგროვებლად.

// Spread (...) ოპერატორი გამოიყენება მასივის ან ობიექტის
// ელემენტების გასაშლელად და ცალკეულ მნიშვნელობებად გადასაცემად.

// განსხვავება:
// Rest აგროვებს რამდენიმე მნიშვნელობას ერთ მასივში/ობიექტში.
// Spread კი შლის მასივს ან ობიექტს ცალკეულ ელემენტებად/თვისებებად.


//////////////////////////////////////////////////


const racers = ["Lewis", "Max", "Lando", "Charles", "George", "Oscar"];

const [gold, silver, ...other_racers] = racers;
console.log(gold);
console.log(silver);
console.log(other_racers);


//////////////////////////////////////////////////


const product = {
  id: 101,
  title: "Wireless Mouse",
  price: 45,
  category: "Electronics",
  stock: 25
};


const { id, title, ...details } = product;

console.log(id);
console.log(title);
console.log(details);


//////////////////////////////////////////////////



function info_encoder(url_encode, ...other_arguments) {

    console.log(url_encode);
ს
  console.log(other_arguments);
}


info_encoder(
  "https://example.com",
  "JavaScript",
  2026,
  "Learning"
);