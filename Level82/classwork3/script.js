const button = document.getElementById("newDog");
const image = document.getElementById("dogImage");

button.addEventListener("click", async function() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");

        const object = await response.json();

        image.src = object.message;

    } catch (error) {
        console.log(error);
    }
});