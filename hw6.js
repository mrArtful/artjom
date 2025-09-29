// Домашнее задание по JavaScript (функции)

// Даны те же данные people:
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
  }
];

// ЗАДАНИЯ:

// 1. Создайте функцию printNames(array), которая принимает массив людей
//    и выводит в консоль все имена.

// 2. Напишите функцию getAdults(array), которая возвращает новый массив,
//    содержащий только людей старше 25 лет.

// 3. Сделайте функцию findByCity(array, cityName),
//    которая возвращает массив людей, живущих в указанном городе.

// 4. Создайте функцию countStudents(array),
//    которая возвращает количество студентов (isStudent === true).

// 5. Напишите функцию getPhones(array),
//    которая возвращает массив всех телефонов людей.

// 6. Создайте функцию findByName(array, name),
//    которая ищет человека по имени и возвращает его объект.

// 7. Сделайте функцию averageAge(array),
//    которая возвращает средний возраст всех людей.