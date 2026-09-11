let answer;

do {
    answer = prompt("ეთანხმებით თამაშის წესებს? ჩაწერეთ yes:");
} while (answer !== "yes");

let attempts = 0;
let secretNumber = 7;

while (attempts < 5) {
    let guess = Number(prompt("გამოიცანით რიცხვი (1-10):"));
    attempts++;

    if (guess === secretNumber) {
        console.log(" გილოცავთ! თქვენ გამოიცანით რიცხვი!");
        break;
    } else {
        console.log(" არასწორია! სცადეთ კიდევ.");
    }
}

if (attempts === 5) {
    console.log(" ცდები ამოგეწურათ. სწორი პასუხი იყო 7.");
}
