// Домашнее задание по JavaScript

// У вас есть массив объектов people (см. ниже):
const people = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 25,
    contact: {
      email: "alice@example.com",
      phone: "+1-202-555-0101"
    },
    address: {
      city: "New York",
      street: "5th Avenue",
      zip: "10001"
    },
    isStudent: false
  },
  {
    id: 2,
    name: "Bob Smith",
    age: 32,
    contact: {
      email: "bob.smith@example.com",
      phone: "+44-20-7946-0011"
    },
    address: {
      city: "London",
      street: "Baker Street",
      zip: "NW1 6XE"
    },
    isStudent: true
  },
  {
    id: 3,
    name: "Carlos Martinez",
    age: 19,
    contact: {
      email: "carlos.m@example.com",
      phone: "+34-91-123-4567"
    },
    address: {
      city: "Madrid",
      street: "Gran Via",
      zip: "28013"
    },
    isStudent: true
  },
  {
    id: 4,
    name: "Diana Lee",
    age: 28,
    contact: {
      email: "diana.lee@example.com",
      phone: "+82-2-987-6543"
    },
    address: {
      city: "Seoul",
      street: "Gangnam-daero",
      zip: "06130"
    },
    isStudent: false
  }
];

// ЗАДАНИЯ:

// 1. С помощью цикла for выведите в консоль имена всех людей из массива.

// 2. С помощью цикла for проверьте каждого человека:
//    если ему меньше 30 лет, выведите "<имя> молодой",
//    если 30 и больше — "<имя> взрослый".

// 3. Пройдите циклом по массиву и выведите только тех людей,
//    у кого isStudent === true (студенты).

// 4. Найдите и выведите email всех людей, живущих в городе "London".

// 5. С помощью цикла for посчитайте, сколько людей старше 25 лет.
//    Выведите результат в консоль.

// 6. Создайте новый массив names[], куда добавьте только имена всех людей.
//    (Используйте цикл for.)

// 7. Найдите человека с именем "Carlos Martinez" и выведите его телефон.

// 8. С помощью if и for выведите в консоль:
//    - "живёт в Европе", если город = "London" или "Madrid"
//    - иначе "живёт не в Европе".
