// const people = ["Alex", "John", "Mary"];

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }

// people.forEach(person => {
//     console.log('Hello', person);
// })

// for (starting_condition, stopping_condition, iteration) {

// }

// let total_odds = 0;
// let total_evens = 0;

// for (let i = 0; i < 101; i++) {
//     if (i % 2) {
//         total_odds += 1;
//     } else {
//         total_evens += 1;
//     }
// }

// console.log(total_odds);
// console.log(total_evens);

// for (let i = 100; i >= 0; i--) {
//     console.log(i);
// }

// for (let i = 100; i >= 0; i-=13) {
//     console.log(i);
// }

// for (let i = 100, j = 200; i >= 0, j > -300; i-=13, j-=99) {
//     console.log(i, j);
// }

// for (let i = 0; i < 10; i--) {
//     console.log(i);
// }

// const people = ["Alex", "John", "Mary"];
// const people = {
//     name: 'Jack',
//     surname: 'Smith',
// }

// {0: "Alex", 1: "John", 2: "Mary" } 

// for (let person of people) {
//     console.log(person);
// }

// for (let index in people) {
//     console.log(index);
// }

// const myCar = {
//     make: 'Mazda',
//     model: 'mx-5',
//     color: 'red',
// }

// console.log(Object.keys(myCar));
// console.log(Object.values(myCar));
// console.log(Object.entries(myCar));


// Object.values(myCar).forEach(val => {
//     console.log(val);
// });

// let condition = 0;
// while (condition < 100) {
//     console.log("I can't stop!", condition);
//     condition += 10;
// }

// let x = 0;
// // while (x !== 0) {
// //     console.log('Hello!');
// // }

// do {
//     console.log('Hello!');
// } while (x !== 0);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// // const people = ['Mary', 'Jack', 'Bob'];

// const people = 'Hello!';
// for (let person of people) {
//     console.log('Person', person)
// }

const people = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 25,
    city: "New York",
    isStudent: false
  },
  {
    id: 2,
    name: "Bob Smith",
    age: 32,
    city: "London",
    isStudent: true
  },
  {
    id: 3,
    name: "Carlos Martinez",
    age: 19,
    city: "Madrid",
    isStudent: true
  },
  {
    id: 4,
    name: "Diana Lee",
    age: 28,
    city: "Seoul",
    isStudent: false
  },
  {
    id: 5,
    name: "Ethan Brown",
    age: 40,
    city: "Toronto",
    isStudent: false
  }
];


// for (let person of people) {
//     if (person.isStudent) {
//         console.log(person.name, 'from', person.city);
//     }
// }

// const notStudent = [];
// for (let person of people) {
//     if (!person.isStudent) {
//         notStudent.push(person);
//     }
// }

// console.log(notStudent);


for (let num1 = 0; num1 < 10; num1++) {     // 10 cycles
    for (let num2 = 0; num2 < 10; num2++) { // 10 * 10 = 100 cycles
        for (let num3 = 0; num3 < 10; num3++) { // 10 * 100 = 1000 cycles
            for (let num4 = 0; num4 < 10; num4++) {  // 10000
                for (let num5 = 0; num5 < 10; num5++) {  // 100000
                    console.log(num1, num2, num3, num4, num5);
                }
            }
        }
    }
}