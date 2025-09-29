// let a = 10;
// let b = 20;

// console.log((a + b) * 2);

// a = 23;
// b = 42;

// console.log((a + b) * 2);

// function sayHello(firstName, lastName) {
//     console.log(`Hello ${firstName} ${lastName}!`);
// }

// sayHello('Roman', 'Kutselepa');
// sayHello('Artjom', 'Smirnov');

// function sayHello(firstName) {
//     if (firstName) {
//         console.log(`Hello ${firstName}!`);
//     } else {
//         console.log('Hello stranger!');
//     }
// }

// sayHello('Roman');
// sayHello();

// const person = {
//     name: 'Jack',
//     surname: 'Smith',
//     age: 25,
// }

// function greetPerson(human) {
//     console.log(`Hello ${human.name} ${human.surname}. You are ${human.age} years old.`);
// }

// greetPerson(person);

// function sayHello() {
//     console.log('Hello world!');
// }

// function numberPi() {
//     return 3.14;
// }

// sayHello();
// console.log(numberPi() * 233);

// function triangleArea(a, b, c) {
//     const hp = (a + b + c) / 2;
//     // const area = (hp * (hp - a) * (hp - b) * (hp - c)) ** 0.5;
//     const area = Math.sqrt(hp * (hp - a) * (hp - b) * (hp - c));
//     return area;
// }

// console.log('Area of triangle with sides 3, 4, 5 is', triangleArea(3, 4, 5), 'cm2');

// const myCar = {
//     make: 'BMW',
//     model: '318i',
//     mileage: 10000,
// }

// function drive(car) {
//     car.mileage += 100;
// }

// console.log(myCar.mileage);
// drive(myCar);
// console.log(myCar.mileage);
// drive(myCar);
// console.log(myCar.mileage);

// function area(a, b) {
//     return a * b;
// }

// function countMaterials(a, b, amount) {
//     let ar = area(a, b);
//     return ar * amount;
// }

// console.log(countMaterials(10, 20, 36));

// let a = 10, b = 20, c = 30;

// function localVisibility() {
//     a = 1, b = 2;
//     console.log('function', a, b, c);
// }

// localVisibility();
// console.log('code', a, b, c);


// function studentOrNot(person) {
//     if (person.isStudent) {
//         return [person.name, true];
//     } else {
//         return [person.name, false];
//     }
// }

// let result = studentOrNot({
//     name: 'Mary',
//     isStudent: true,
// });

// console.log(result);

// function sumThreeNumbers(a, b, d, c=0) {
//     console.log(a + b + c + d);
// }

// sumThreeNumbers(20, 30, 40);
// sumThreeNumbers(20, 30, 50);

// function sumAllNumbers(a, b, ...items) {
//     let total = 0;
//     for (let item of items) {
//         total += item;
//     }
//     return total;
// }

// console.log(sumAllNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 123));

// let nums = [1, 2, 3, 4, 5, 6, 7];
// let [a, b, ...rest] = nums;
// console.log(a);
// console.log(b);
// console.log(rest);


// function test(a, b) {
//     console.log('A', a);
//     console.log('B', b);
// }

// test(b=20, a=30);

// function oddOrEven(num) {
//     if (num % 2 === 0) {
//         console.log(num, 'EVEN');
//     } else {
//         console.log(num, 'ODD');
//     }
// }

// let nums = [2, 5, 32, 6, 3, 89, 32, 421];

// nums.forEach(oddOrEven);

function wrapper(func) {
    console.log('Starting...');
    func();
    console.log('Stopping...');
}

function sayHello() {
    console.log('Hello world!');
}

wrapper(sayHello);