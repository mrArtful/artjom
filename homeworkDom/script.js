// У тебя есть 'index.html' и style.css
// Ниже массив Animals
//
// 1. Найди контейнер по его ID (cards-container).
// 2. С помощью JavaScript:
//       Пройди по массиву animals с помощью forEach().
//       Для каждого объекта:
//          Создай div с классом card.
//          Добавь в него img, h3 и p.
//          Заполни их данными из объекта.
//          Добавь карточку в контейнер.
// 3. Добавь три кнопки
//      Показать всех
//      Показать домашних (type: 'pet')
//      Показать диких (type: 'wild)
//      Кнопки должны менять отображение животных (как на уроке)
// 4. Добавь на страницу элемент-счетчик, который будет числом показывать количество выведеных животных. (длина массива)

const animals = [
  {
    name: "Cat",
    image: "https://placekitten.com/200/200",
    info: "Cats love sleeping and chasing laser dots.",
    type: "pet"
  },
  {
    name: "Dog",
    image: "https://placedog.net/200/200",
    info: "Dogs are loyal friends and enjoy long walks.",
    type: "pet"
  },
  {
    name: "Panda",
    image: "https://placebear.com/200/200",
    info: "Pandas spend most of their day eating bamboo.",
    type: "wild"
  },
  {
    name: "Fox",
    image: "https://randomfox.ca/images/32.jpg",
    info: "Foxes are clever and curious forest animals.",
    type: "wild"
  },
  {
    name: "Koala",
    image: "https://placebear.com/201/201",
    info: "Koalas sleep up to 20 hours a day in eucalyptus trees.",
    type: "wild"
  },
  {
    name: "Rabbit",
    image: "https://placekitten.com/201/201",
    info: "Rabbits are fast and love eating carrots.",
    type: "pet"
  },
  {
    name: "Elephant",
    image: "https://picsum.photos/200/200?random=1",
    info: "Elephants are the largest land animals on Earth.",
    type: "wild"
  },
  {
    name: "Tiger",
    image: "https://picsum.photos/200/200?random=2",
    info: "Tigers are strong and graceful big cats.",
    type: "wild"
  },
  {
    name: "Penguin",
    image: "https://picsum.photos/200/200?random=3",
    info: "Penguins can’t fly but are amazing swimmers.",
    type: "wild"
  },
  {
    name: "Lion",
    image: "https://picsum.photos/200/200?random=4",
    info: "Lions are known as the kings of the jungle.",
    type: "wild"
  }
];
