const incBtn = document.getElementById("plus")
const decBtn = document.getElementById("minus")
const doubleBtn = document.getElementById("double")
const squareBtn = document.getElementById("square")
const resetBtn = document.getElementById("reset")
const value = document.getElementById("number")

let count = 0

value.textContent = count

incBtn.addEventListener("click", () => {
    count++
    value.textContent = count
})

decBtn.addEventListener("click", () => {
    count--
    value.textContent = count
})

doubleBtn.addEventListener("click", () => {
    count = count * 2
    value.textContent = count
})

squareBtn.addEventListener("click", () => {
    count = count * count
    value.textContent = count
})

resetBtn.addEventListener("click", () => {
    count = 0
    value.textContent = count
})
