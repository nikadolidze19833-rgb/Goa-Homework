//1)
const names = ['Davit', 'Jan', 'Gio', 'Lado', 'Guka'];
const nums = [1, 98, 102, 34, 87];

const mixed_arr = [...names, ...nums];

console.log(mixed_arr);
  

//2)
const cars = [
    'BMW M5 F90',
    'Mersedes Benz G65 AMG',
    'Mazda RX7',
    'Toyota Prius'
];

const [car1, car2, ...other_cars] = cars;

console.log(car1);
console.log(car2);
console.log(other_cars);



//3)
function greet_all(name, surname, ...rest) {
    console.log(name);
    console.log(surname);
    console.log(rest);
}

greet_all('Davit', 'Beridze', 25, 'Tbilisi', true);