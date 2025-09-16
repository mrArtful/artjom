// const empty = [];
// // const empty = new Array();

// console.log(typeof empty);

// console.log(Array.isArray(empty));

// const numbers = [4, 3, 2, 9, 5, 4, 3, 1];
// const numbers = new Array(4, 3, 2, 9, 5, 4, 3, 1);

// console.log(numbers.length);
// console.log(numbers[1]);
// numbers.length = 20;

// console.log(numbers);


// const filledArray = [123, 'Hello', [4, [7, 8, 9], 6], true, {name: 'Jack', surname: 'Smith'}, null, undefined, NaN];

// console.log(filledArray[2][1][1]);
// console.log(filledArray[4]['name']);

// const numbers = [1, 2, 3, 4, 999];

// // numbers[2] = 777;
// // numbers[5] = 999;
// // numbers[100] = 333;
// console.log(numbers);
// console.log('Length:', numbers.length);

// // numbers.push(777);
// // numbers.unshift(999);

// // let popped = numbers.pop();
// // console.log('Popped:', popped);

// numbers.shift();

// console.log(numbers);
// console.log('Length:', numbers.length);


// const courses = ['English', 'Math', 'Biology', 'Art', 'Programming'];

// // console.log(courses.indexOf('Math'));
// // courses.reverse();
// // console.log(courses);

// // courses.splice(2, 1, 'Physics', 'Estonian', 'Litretaure');
// courses.splice(courses.indexOf('Art'), 1);  // delete from array using value 

// console.log(courses);


// const names = ['Jack', 'Sarah', 'Samantha', 'Bob', 'Simon'];

// names.forEach(name => {
//     console.log(`Hello ${name}!`);
//     if (name.length > 5) {
//         console.log('You have a long name.');
//     } else {
//         console.log('You have a short name.');
//     }
// });


const numbers = [1, 23, 52, 13, 74, 29, 21, 2, 34];
const squares = [];

numbers.forEach(num => {
    squares.push({
        number: num,
        square: num ** 2,
        cube: num ** 3,
    });
});

console.log(squares);

// numbers.forEach(num => {
//     squares.push(num ** 2);
// });

// console.log(squares);