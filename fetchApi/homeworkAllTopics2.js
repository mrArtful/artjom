// Задача 1
// -----------------------
// Дан массив чисел. Найди:
// 1) сумму всех чисел
// 2) максимальное число
// 3) количество чисел больше 10

const numbers = [5, 12, 3, 20, 11, 7];

let sum = 0;
let max = 0;
let largeNumbers = [];

numbers.forEach(num => {
  sum += num;
  num > max ? max = num : null;
  num > 10 ? largeNumbers.push(num) : null;
})

console.log(`Sum: ${sum}\nMax: ${max}\nLarge numbers: ${largeNumbers}`)



// Задача 2
// -----------------------
// Дан объект с товарами и ценами.
// 1) Найти товар с самой высокой ценой.
// 2) Посчитать общую стоимость всех товаров.
// 3) Вывести товары, цена которых меньше 300.

const products = {
    mouse: 150,
    keyboard: 350,
    monitor: 1200,
    usb: 50,
    speaker: 270
};

let maxPrice = 0;
let totalPrice = 0;

Object.entries(products).forEach(product => {
  product[1] > maxPrice ? maxPrice += product : null;
  totalPrice += product[1]
  product[1] < 300 ? console.log(`${product[0]} - ${product[1]}`) : null;
})



// Задача 3
// -----------------------
// Дан массив строк имён. Нужно:
// 1) вывести только те имена, где больше 5 букв
// 2) создать новый массив имён в верхнем регистре
// 3) посчитать, сколько имён начинается на букву "a"

const names = ["alex", "marina", "andrew", "kate", "alina", "max"];

const upperNames = names.map(name => name[0].toUpperCase() + name.slice(1));
let counter = 0;

names.forEach(name => {
  name.length > 5 ? console.log(name) : null;
  name.startsWith('a') ? counter += 1 : null;
})
console.log('Uppercase names:', upperNames);
console.log('Counter:', counter);

// Задача 4
// -----------------------
// Удалить повторяющиеся слова из строки, сохранив порядок.
// Сохранить результат в новую строку.

const str2 = "apple banana apple orange banana kiwi apple";

const unique = [];
const fruitList =  str2.split(' ');

fruitList.forEach(fruit => !unique.includes(fruit) ? unique.push(fruit) : null);
console.log(unique.join(' '));

// Задача 5
// -----------------------
// Разделить товары на 3 категории по цене и разместить названия в соответствующие массивы:
// <2, 2-5, >5
// 
const products4 = {
  bread: 1.2,
  milk: 0.9,
  cheese: 4.5,
  meat: 6.2,
  salad: 2.3,
  cola: 1.5
};
const cheap = [];
const affordable = [];
const expensive = [];

Object.entries(products4).forEach(product => {
  if (product[1] < 2) {
    cheap.push(product[0]);
  } else if (product[1] <= 5) {
    affordable.push(product[0]);
  } else {
    expensive.push(product[0]);
  }
})

console.log(`Cheap: ${cheap}\nAffordable: ${affordable}\nExpensive: ${expensive}`);


