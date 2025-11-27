// const d = new Date('2023-03-10T14:04:24.810Z');

// console.log(d);

// // 2025-11-14T14:04:24.810Z
// // YYYY-MM-DDTHH:mm:ss.ms


// const d = new Date(Date.UTC(1988, 3, 16, 0, 0, 23)); 

// console.log(d);

// const d = new Date();

// console.log(d.getTime());

// // UNIX TIMESTAMP
// // 1763130185881

// // 1s - 1000ms - 100000micro/s

// let date = new Date(1763130185881 - 86400000 * 3);
// let day = 24 * 60 * 60;
// console.log(day);
// console.log(date);

// console.log(new Date(1590998400));


// const dateString = '2023-08-12';

// console.log(new Date(Date.parse(dateString)));

const d = new Date();

// console.log(d);
// console.log(d.getFullYear());  // 2025
// console.log(d.getMonth());  // 0-11
// console.log(d.getDay());  // 0-6  Sun-0
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds()); 

// d.setFullYear(2030);
// d.setMonth(2);
// d.setDate(10);
// d.setHours(23, 17, 42);
// console.log(d);

const d2 = new Date(2024, 10, 23);

// console.log(d > d2); 
// console.log(d.getTime() === d2.getTime());
// console.log(d.getTime());

// date1 - date2 = timeDelta
// date1 - timeDelta = date2

console.log(d2 - d);
console.log(d - d2);

const diffMs = d2 - d;
console.log(diffMs);
const diffSec = diffMs / 1000;
console.log(diffSec);
const diffMin = diffSec / 60;
console.log(diffMin);
const diffHours = diffMin / 60;
console.log(diffHours);
const diffDays = diffHours / 24;
console.log(diffDays);

