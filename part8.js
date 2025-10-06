// const arr = [1, 2, 3, 4, 5, 6, 7];

// function square(x) {
//     console.log(x ** 2);
// }

// arr.forEach(function(x) {
//     console.log(x ** 2);
// });

// const sayHello = function() {
//     console.log('Hello world!');
// }
// function sayHello2() {
//     console.log('Hello world!');
// }

// sayHello();
// sayHello2();

// const sayHello = () => {
//     console.log('Hello world!');
// }

// sayHello();

// const returnNumber = () => {
//     return 100;
// };

// console.log(returnNumber());

// const square = (number, pow) => number ** pow;

// console.log(square(233, 4));

// const square2 = function (number, pow) {
//     return number ** pow;
// }

// const convertToMilliseconds = seconds => seconds * 1000;

// console.log('Please wait...');

// setTimeout(() => console.log('Hello world'), convertToMilliseconds(4.5));

// millisecond 1000 in second
// microsecond 1000000 in second

const people = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 25,
    contact: { email: "alice@example.com", phone: "+1-202-555-0101" },
    address: { city: "New York", street: "5th Avenue", zip: "10001" },
    isStudent: false
  },
  {
    id: 2,
    name: "Bob Smith",
    age: 32,
    contact: { email: "bob.smith@example.com", phone: "+44-20-7946-0011" },
    address: { city: "London", street: "Baker Street", zip: "NW1 6XE" },
    isStudent: true
  },
  {
    id: 3,
    name: "Carlos Martinez",
    age: 19,
    contact: { email: "carlos.m@example.com", phone: "+34-91-123-4567" },
    address: { city: "Madrid", street: "Gran Via", zip: "28013" },
    isStudent: true
  },
  {
    id: 4,
    name: "Diana Lee",
    age: 28,
    contact: { email: "diana.lee@example.com", phone: "+82-2-987-6543" },
    address: { city: "Seoul", street: "Gangnam-daero", zip: "06130" },
    isStudent: false
  },
  {
    id: 5,
    name: "Diana Lee",
    age: 30,
    contact: { email: "diana.lee2@example.com", phone: "+82-2-987-65233" },
    address: { city: "Berlin", street: "Gangnam-daero", zip: "06130" },
    isStudent: false
  }
];

// const students = people.filter(person => person.isStudent === true);
// console.log(students);

// const olderPeople = people.filter(person => person.age > 25);
// console.log(olderPeople);

// function findByName(peopleArray, name) {
//     return peopleArray.filter(person => {
//         return person.name.toLowerCase() === name.toLowerCase()
//     });
// }

// console.log(findByName(people, 'bob smith'));

// const names = people.map(person => person.name);

// console.log(names);

// const numbers = [1, 4, 6, 78, 23, 12, 65];

// const newNumbers = numbers.map(num => ({
//     number: num,
//     square: num ** 2,
//     cube: num ** 3,
// }));

// console.log(newNumbers);


// {
//     name: "Diana Lee",
//     age: 28,
//     email: "diana.lee@example.com"
//     phone: "+82-2-987-6543",
//   },

// const simplifiedPeople = people.map(person => {
//     return {
//         name: person.name,
//         age: person.age,
//         email: person.contact.email,
//         phone: person.contact.phone,
//     }
// })

// console.log(simplifiedPeople);

const htmlCode = people.map(person => {
    return `<div>
                <h1>${person.name}</h1>
                <p>${person.age} years old</p>
            </div>`
});

console.log(htmlCode);

const root = document.getElementById('root');
htmlCode.forEach(element => root.innerHTML += element);
