
let addButton = document.getElementById("addButton");
let removeButton = document.getElementById("removeButton");
let productCount = document.getElementById("productCount");


let products = Number(localStorage.getItem("products")) || 0;

productCount.textContent = products;

addButton.addEventListener("click", function () {
    products++;

    localStorage.setItem("products", products);
    productCount.textContent = products;
});


removeButton.addEventListener("click", function () {
    if (products > 0) {
        products--;
    }

    localStorage.setItem("products", products);
    productCount.textContent = products;
});
