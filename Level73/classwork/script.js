// localStorage-ს ვიყენებთ, რომ ბრაუზერში ინფორმაცია შევინახოთ და website-ის განახლების შემდეგაც არ დაიკარგოს.
localStorage.setItem('name', 'bob')
localStorage.setItem('surname', 'brown')
localStorage.setItem('age', '28')

console.log(localStorage.getItem('name'));
console.log(localStorage.getItem('surname'));
console.log(localStorage.getItem('age'))