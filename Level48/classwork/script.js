// let - შეგვიძლია ცვლადის მნიშვნელობის შეცვლა
// მაგალითად:
let age = 15;
age = 16;

// const - ცვლადის მნიშვნელობის შეცვლა აღარ შეგვიძლია მაგალითად:
const name = "Nika";
// name = "Giorgi"; // ეს გამოიწვევს შეცდომას

// var - ძველი მეთოდია ცვლადების შესაქმნელად. თანამედროვე JavaScript-ში ძირითადად აღარ ვიყენებთ, რადგან var-ს აქვს function scope და შეიძლება ვებსაიტმა აღარ იმუშაოს



let number = 20;

console.log(number + 5); // მიმატება
console.log(number - 5); // გამოკლება
console.log(number * 5); // გამრავლება
console.log(number / 5); // გაყოფა
console.log(number % 3); // ნაშთი
console.log(number ** 2); // ხარისხში აყვანა





const correctName = "nika";

let userName = prompt("შეიყვანე სახელი:");

userName === correctName
  ? console.log("name is correct")
  : console.log("name is not correct");
