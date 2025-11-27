const moment = require('moment');

console.log(moment());
console.log(moment('2003-04-18'));

console.log(moment('3 June 98, 12:50', 'D MMMM YY, HH:mm'));
const d = moment('12 June 98, 12:50', 'D MMMM YY, HH:mm');

console.log(d.date());

console.log(d.format('Do MMMM YYYY'));

console.log(moment([1988, 3, 16]).fromNow());

console.log(d.toArray());
console.log(d.toJSON());