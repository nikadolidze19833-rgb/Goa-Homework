function guessNumber(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number === 103) {
                resolve("You guessed the number");
            } else {
                reject("Try again");
            }
        }, 1000);
    });
}


async function testAsync() {
    try {
        let result = await guessNumber(103);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

testAsync();




//2)API არის საშუალება, რომლის დახმარებითაც სხვადასხვა პროგრამები ერთმანეთს უკავშირდებიან და ინფორმაციას ცვლიან.




async function getUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        const user = await response.json();

        console.log(user.name);

    } catch (error) {
        console.log(error);
    }
}

getUser();