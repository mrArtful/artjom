// // Property свойство
// // name
// // age
// // height

// // Method
// // talk
// // run
// // jump

// class Goblin {
//     constructor(health, damage, color) {
//         this.health = health;
//         this.damage = damage;
//         this.color = color;
//         this.name = `${color} goblin`;
//         this.type = 'enemy';
//     }

//     talk() {
//         console.log(`I am ${this.name}!`);
//     }

//     takeDamage(damage) {
//         if (damage < 0) {
//             damage = 0;
//         } 
//         if (this.health <= 0) {
//             console.log(`${this.name} is dead, you can't attack it.`);
//             return;
//         }
//         if (this.health > 0) {
//             this.health -= damage;
//             console.log(`Hit goblin for ${damage} HP.`);
//         }
//         if (this.health <= 0) {
//             console.log(`${this.name} is dead.`);
//             this.health = 0;
//         }
//     }
// }

// const goblin1 = new Goblin(100, 12, 'green');
// const goblin2 = new Goblin(100, 16, 'yellow');

// console.log(goblin1);
// console.log(goblin2);

// console.log(goblin2.health);
// goblin2.takeDamage(25);
// console.log(goblin2.health);
// goblin2.takeDamage(25);
// console.log(goblin2.health);
// goblin2.health = 1000;
// goblin2.takeDamage(-59);
// console.log(goblin2.health);
// goblin2.takeDamage(25);
// console.log(goblin2.health);
// goblin2.takeDamage(25);
// console.log(goblin2.health);


// class Employee {
//     constructor(name, surname, age, salary) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//         this.salary = salary;
//     }

//     get () {
//         return `${this.name} ${this.surname}`;
//     }

//     get email() {
//         return `${this.name.toLowerCase()}.${this.surname.toLowerCase()}@company.com`;
//     }
// }

// class Developer extends Employee {
//     constructor(name, surname, age, salary, progLang) {
//         super(name, surname, age, salary);
//         this.progLang = progLang || '';
//     }

//     writeCode() {
//         console.log(`${this.fullName} writes ${this.progLang} code.`);
//     }

// }

// class Manager extends Employee {
//     constructor(name, surname, age, salary, employees) {
//         super(name, surname, age, salary);
//         if (employees) {
//             this.employees = employees;
//         } else {
//             this.employees = [];
//         }
//     }

//     addEmployee(emp) {
//         if(!this.employees.includes(emp)) {
//             this.employees.push(emp);
//         }
//     }

//     removeEmployee(emp) {
//         if(this.employees.includes(emp)) {
//             this.employees.splice(this.employees.indexOf(emp), 1);
//         }
//     }

//     listEmployees() {
//         this.employees.forEach(emp => console.log(`Hello ${emp.fullName}`));
//     }
// }

// const emp1 = new Employee('Jack', 'Smith', 25, 2000);
// console.log(emp1);

// const dev1 = new Developer('Sarah', 'Gold', 30, 3000, 'JavaScript');
// console.log(dev1.email);
// dev1.writeCode();

// const man1 = new Manager('Bob', 'Williams', 45, 5000, [dev1]);
// man1.addEmployee(emp1);
// man1.listEmployees();
// man1.removeEmployee(dev1);
// console.log(man1.email);

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     area() {
//         return this.width * this.height;
//     }

//     static equals(a, b) {
//         return a.area() === b.area();
//     }
// }

// const rect1 = new Rectangle(25, 35);
// const rect2 = new Rectangle(15, 25);

// console.log(Rectangle.equals(rect1, rect2));

// class User {

//     #userName;
//     #password;

//     constructor(userName, password) {
//         this.#userName = userName;
//         this.#password = password;
//     }

//     get userName() {
//         return this.#userName;
//     }

//     set userName(newName) {
//         this.#userName = newName;
//     }

//     checkPassword(userInput) {
//         return this.#password === userInput;
//     }

//     changePassword(password1, password2) {
//         if (password1 === password2) {
//             this.#password = password1;
//         }
//     }

// }

// const user1 = new User('Superman', '123456');

// console.log(user1.checkPassword('123456'));

// console.log(user1.userName);
// user1.userName = 'Batman';
// console.log(user1.userName);

// user1.changePassword('123', '123');
// console.log(user1.checkPassword('123456'));
// console.log(user1.checkPassword('123'));


// class Account {

//     #balance = 0;

//     deposit(amount) {
//         this.#balance += amount;
//     }

//     withdraw(amount) {
//         if (amount <= this.#balance) this.#balance -= amount;
//     }

//     get balance() {
//         return this.#balance;
//     }

// }

// class Account {

//     #balance = 0;
//     static #bank_balance = 0;

//     deposit(amount) {
//         this.#balance += amount;
//         Account.bank_deposit(amount);
//     }

//     withdraw(amount) {
//         if (amount <= this.#balance) {
//             this.#balance -= amount;
//             Account.bank_deposit(-amount);
//         };
//     }

//     get balance() {
//         return this.#balance;
//     }

//     static bank_deposit(amount) {
//         Account.#bank_balance += amount;
//     }

//     static get bank_balance() {
//         return Account.#bank_balance;
//     }

// }

// const acc = new Account();
// const acc2 = new Account();

// acc.deposit(100);
// console.log(acc.balance);
// acc.withdraw(25);
// console.log(acc.balance);
// acc2.deposit(400);
// console.log(acc2.balance);
// console.log(Account.bank_balance);