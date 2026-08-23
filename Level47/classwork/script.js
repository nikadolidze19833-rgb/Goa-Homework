let num1 = -12.75;
let num2 = Math.random() * 49 + 1; 

console.log("პირველი რიცხვი:", num1);
console.log("მეორე რიცხვი:", num2);


let min = Math.min(num1, num2);
let max = Math.max(num1, num2);

console.log("ყველაზე პატარა:", min);
console.log("ყველაზე დიდი:", max);


let truncated = Math.trunc(max);

console.log("მთელი ნაწილი:", truncated);


if (truncated > 0) {
    console.log("ნიშანი: დადებითი");
} else if (truncated < 0) {
    console.log("ნიშანი: უარყოფითი");
} else {
    console.log("ნიშანი: ნული");
}


let rounded = Math.round(min);

console.log("დამრგვალებული ყველაზე პატარა რიცხვი:", rounded);

