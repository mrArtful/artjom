const myCar = {
    make: "Honda",
    model: "Civic",
    info: {
        color: 'red',
        mileage: 10000,
        isPopular: true,
    }
}

console.log(myCar);

const jsonMyCar = JSON.stringify(myCar);
console.log(jsonMyCar);

// {"make":"Honda","model":"Civic","info":{"color":"red","mileage":10000}}