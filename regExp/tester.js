// const re = /abc/;

// const re = new RegExp("abc");

// const re = /\\d/;

// const text = "4673 Order 123 545 2321asd213";

// console.log(text.match(/\./));

// console.log([...text.matchAll(/\d+/g)]);



// const text = "ball wall mall hall tall badall nirall 987 23_das all 23all 23_all Hallo badallba";
// // const re = /\w+/g;
// // const re = /[A-Za-zА-Яа-яЁё]all/g;
// // const re = /\b[a-zA-Z]all\b/g;
// const re = /\B[a-zA-Z]all\B/g;


// console.log([...text.matchAll(re)]);


// const text = `
// 555-124-5555
// 800-458-6632
// 900-586-4877
// 555-145-7548
// 800-458-452
// 900-457-123
// `;
// const re = /\d{3}-\d{3}-\d{3,4}/g;
// const re = /\d{3}/g;
// const re = /[89]00-\d{3}-\d{3,4}/g;
// const re = /^\n555/g;
// const re = /^800/mg;


// console.log([...text.matchAll(re)]);


// const text = `
// Mr. Stone
// Mr Smith
// Ms Gold
// Ms. Stone
// Mrs Ackerman
// Mrs. Biden
// Mr T
// `;
// const re = /M(r|s|rs)\.? [A-Z][a-z]*/g;


// console.log([...text.matchAll(re)]);

// const text = 'Hall Mall ball wall tALL';

// const re = /[a-z]all/ig;

// console.log([...text.matchAll(re)]);


// const text = 'Hello, people. of planet! Earth people?';
// const re = /\bp[a-z]+e\b/g;

// console.log(re.test(text));
// console.log(re.exec(text));  // no global flag

// console.log(text.match(re));
// console.log(text.search(re));
// console.log(text.replaceAll(re, '***'));
// console.log(text.split(/[.,!?] */))

// YYYY-MM-DD
const pattern = /(?:\d{4})-(\d{2})-(\d{2})/;
const match = 'asdas asd as assa 2002-12-23'.match(pattern);

console.log(match);


// const pattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
// const match = 'asdas asd as assa 2002-12-23'.match(pattern);

// console.log(match.groups.year);

// const pattern = /(\w+)\s(\w+)\s\2/;
// const match = 'hello world world'.match(pattern);

// console.log(match);

// const text = '23+54-233*435/3243+231-233+1';
// const pattern = /\d+(?=\+)/g;

// const text = '100kg 400g 20t 65kg';
// const pattern = /\d+(?=kg)/g;

// const text = '100kg 400g 20t 65kg';
// const pattern = /\d+(?!kg|\d)/g;

// const text = '23+54-233*435/3243+231-233+1';
// const pattern = /(?<=\+)\d+/g;

// const text = '23+54-233*435/3243+231-233+1';
// const pattern = /(?<!\+|\d)\d+/g;

// const match = text.matchAll(pattern);

// for (let m of match) {
//     console.log(m);
// }