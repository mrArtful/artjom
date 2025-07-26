// // key:value

// const myCar = {
//     make: 'Honda',
//     model: 'Civic',
//     mileage: 123456,
//     isPopular: true,
// }

// console.log(myCar);

// myCar.color = 'red';
// myCar.isPopular = false;
// delete myCar.model;

// console.log(myCar);

// const empty = {};

// const profile = {
//     username: 'Terminator',
// }

// console.log(profile['username']);

// const activationKey = 'isActivated';

// profile[activationKey] = true;

// console.log(profile);

// const myCar = {
//     make: 'Audi',
//     model: 'A5',
//     info: {
//         year: 2005,
//         color: 'red',
//     }
// }

// console.log(myCar.info.color.toUpperCase());

// const userName = 'Terminator';
// const friendsQty = 50000;

// const profile = {
//     userName,
//     friendsQty,
// }

// console.log(profile);


// const button = {
//     padding: '20px',
//     border: '1px solid black',
//     color: 'green',
// }

// const btnMsg = {
//     message: 'Error',
// }

// const errorButton = {
//     ...button,
//     ...btnMsg,
//     color: 'red',
// }

// console.log(errorButton);

const myCar = {
    make: 'VW',
    model: 'Golf',
    info: {
        color: 'black',
        mileage: 20000,
    }
}

// const myCar2 = {...myCar};
// const myCar2 = Object.assign({}, myCar);
const myCar2 = JSON.parse(JSON.stringify(myCar));

// myCar2.make = 'Subaru';
// myCar.model = 'Legacy';

// myCar.info.color = 'green';

// console.log(myCar2);
// console.log(myCar);

console.log(JSON.stringify(myCar));
let jsonString = `{"make":"VW","model":"Golf","info":{"color":"black","mileage":20000}}`;
console.log(JSON.parse(jsonString));