const people = [
  {
    name: "Alice",
    age: 25,
    city: "Tallinn",
    isStudent: false
  },
   {
    name: "Alice",
    age: 25,
    city: "Tallinn",
    isStudent: false
  },
   {
    name: "Alice",
    age: 25,
    city: "Tallinn",
    isStudent: false
  },
   {
    name: "Alice",
    age: 25,
    city: "Tallinn",
    isStudent: false
  },
   {
    name: "Alice",
    age: 25,
    city: "Tallinn",
    isStudent: false
  },
  {
    name: "Bob",
    age: 30,
    city: "Tartu",
    isStudent: true
  },
  {
    name: "Charlie",
    age: 22,
    city: "Narva",
    isStudent: true
  },
  {
    name: "Diana",
    age: 28,
    city: "Pärnu",
    isStudent: false
  },
  {
    name: "Evelin",
    age: 35,
    city: "Viljandi",
    isStudent: false
  }
];

const root = document.querySelector('#root');

function createNameHeading(message) {
    const h1 = document.createElement('h1');
    h1.innerText = message;
    h1.classList.add('name-heading');
    return h1;
}

function createAgeHeading(message) {
    const h3 = document.createElement('h3');
    h3.innerText = message;
    h3.classList.add('age-heading');
    return h3;
}

function createCityHeading(message) {
    const h3 = document.createElement('h3');
    h3.innerText = message;
    h3.classList.add('city-heading');
    return h3;
}

function createPersonCard(person) {
    const personCard = document.createElement('div');
    personCard.classList.add('person-card');
    // if (person.isStudent) {
    //     personCard.classList.add('student');
    // } else {
    //     personCard.classList.add('no-student');
    // }

    person.isStudent
        ? personCard.classList.add('student')
        : personCard.classList.add('no-student');

    personCard.append(createNameHeading(person.name));
    personCard.append(createAgeHeading(person.age));
    personCard.append(createCityHeading(person.city));
    return personCard;
}

function showAll() {
    root.innerHTML = '';
    people.forEach(person => {
        root.append(createPersonCard(person));
    });
}
document.querySelector('.show-all').addEventListener('click', showAll);

function showStudents() {
    root.innerHTML = '';
    const students = people.filter(person => person.isStudent);
    students.forEach(person => {
        root.append(createPersonCard(person));
    });
}
document.querySelector('.show-students').addEventListener('click', showStudents);

function showNotStudents() {
    root.innerHTML = '';
    const notStudents = people.filter(person => !person.isStudent);
    notStudents.forEach(person => {
        root.append(createPersonCard(person));
    });
}
document.querySelector('.show-no-students').addEventListener('click', showNotStudents);

showAll();

// <div class="person-card">
//    <h1 class="name-heading">Name</h1>
//    <h3 class="age-heading">Age</h3>
//    <h3 class="city-heading">City</h3>
// </div>