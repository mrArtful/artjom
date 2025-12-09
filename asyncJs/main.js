// console.log('Hello');
// console.log('my');
// setTimeout(() => {
//     console.log('name');
// }, 4000);
// console.log('is');
// console.log('Jack');


// const production = () => {
//     setTimeout(() => {
//         console.log('Order was made');
//         setTimeout(() => {
//             console.log('Meat was grilled');
//             setTimeout(() => {
//                 console.log('Buns and vegetables were added');
//                 setTimeout(() => {
//                     console.log('Sauce was added');
//                     setTimeout(() => {
//                         console.log('Burger was packed');
//                         setTimeout(() => {
//                             console.log('Burger was served');
//                         }, 1000);
//                     }, 2000);
//                 }, 1000);
//             }, 2000);
//         }, 2000);
//     }, 1000);
// }

// production();

// let restrauntIsOpen = true;

// const order = (time, callback) => {

//     return new Promise((resolve, reject) => {
//         if (restrauntIsOpen) {
//             setTimeout(() => {
//                 resolve(callback());
//             }, time);
//         } else {
//             reject(console.log('Sorry, restraunt is closed.'));
//         }
//     })
// }

// order(1000, () => console.log('Order was made'))
//     .then(() => order(1000, () => console.log('Meat was grilled')))
//     .then(() => order(2000, () => console.log('Buns and vegetables were added')))
//     .then(() => order(1000, () => console.log('Sauce was added')))
//     .then(() => order(1000, () => console.log('Burger was packed')))
//     .then(() => order(1000, () => console.log('Burger was served')))
//     .catch(() => console.log('Customer left without food'))
//     .finally(() => console.log('Day ended. Shop is closed.'));

// const idCode = '388031602721';

// try {
//     // someFunc();
//     if (idCode.length !== 11) {
//         throw new Error('Length of id code is incorrect.');
//     }
// }
// catch (error) {
//     console.log('Length is incorrect, please try again!');
// }
// finally {
//     console.log('Good bye');
// }

function delay() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5;

        if (success) {
            resolve('SUCCESS');
        } else {
            reject('BETTER LUCK NEXT TIME');
        }
    });
}

async function run() {
    try {
        const result = await delay();
        console.log(result);
    } catch(error) {
        console.log(error);
    }
    // console.log('Start');
    // await delay();
    // console.log('End');
}

run();
