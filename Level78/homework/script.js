//1)EC6-ჯავასცრიპტის ბოლო განახლება რომელიც გამოვიდა 2015 წელს და დაემატა უამრავი ახალი ობიექტები და ტეგები, მაგრამ ამ განახლებამ ზოგიერთი ძველი კოდები დაასუსტა
//2)
const racers = ["Lewis", "Max", "Lando", "Charles", "George", "Oscar"];

const [gold, silver, ...other_racers] = racers;

console.log(gold);
console.log(silver);
console.log(other_racers);

//3)
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


//4)
