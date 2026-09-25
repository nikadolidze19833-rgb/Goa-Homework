const products = [
    {
        name: "Laptop",
        price: 1200
    },
    {
        name: "Phone",
        price: 800
    },
    {
        name: "Headphones",
        price: 150
    }
];

const productsDiv = document.querySelector("#products");

productsDiv.innerHTML = `
    <h2>${products[0].name}</h2>
    <p>ფასი: $${products[0].price}</p>
    <button>Add to Cart</button>

    <h2>${products[1].name}</h2>
    <p>ფასი: $${products[1].price}</p>
    <button>Add to Cart</button>

    <h2>${products[2].name}</h2>
    <p>ფასი: $${products[2].price}</p>
    <button>Add to Cart</button>
`;
