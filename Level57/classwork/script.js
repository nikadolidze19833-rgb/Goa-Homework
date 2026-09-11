let arr = ["apple", "banana", "kiwi", "strawberry", "mango", "orange", "watermelon", "pear"];

// 1) 
arr.forEach((cur, index) => {
    console.log(index, cur);
});

// 2) map 
let lengths = arr.map(item => item.length);
console.log(lengths);

// 3) 
let firstIndex = arr.findIndex(item => item.length > 5);
console.log(firstIndex);

// 4) 
let filteredList = arr.filter(item => item.length > 5);
console.log(filteredList);

// 5) reduce 
let numbers = [10, 20, 30, 40, 50];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);