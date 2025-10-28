// // // const mainHeading = document.getElementById('title');
// // // console.log(mainHeading);


// // // const listItems = document.getElementsByClassName('list-item');
// // // console.log(listItems);


// // // const listItems = document.getElementsByTagName('li');
// // // console.log(listItems);

// // const mainHeading = document.querySelector('#title');
// // console.log(mainHeading);

// // mainHeading.style.backgroundColor = 'rgb(124, 76, 92)';

// // // const listItems = document.querySelectorAll('.list-item');
// // const listItems = document.getElementsByClassName('list-item');
// // console.log(listItems);

// // // listItems.forEach(item => item.style.color = 'red');

// // for(let item of listItems) {
// //     item.style.color = 'red';
// // }

// const ul = document.querySelector('ul');
// const newListItem = document.createElement('li');
// newListItem.innerText = 'Mexican food';

// // newListItem.setAttribute('class', 'list-item');
// // newListItem.removeAttribute('class');

// newListItem.classList.add('list-item');
// newListItem.classList.add('test-class');
// newListItem.classList.remove('test-class');

// console.log(newListItem.classList.contains('list-item'));

// ul.append(newListItem);

// ul.remove();

// // const firstListItem = document.querySelector('.list-item');

// // console.log(firstListItem.innerHTML);
// // console.log(firstListItem.innerText);
// // // console.log(firstListItem.textContent);
// // firstListItem.innerHTML = '<span>Mexican</span> food';
// const btn2 = document.querySelector('.two');
// btn2.addEventListener('click', () => {
//     const body = document.querySelector('body');
//     // if (body.style.backgroundColor === 'rgb(51, 51, 51)') {
//     //     body.style.backgroundColor = 'dodgerblue';
//     // } else {
//     //     body.style.backgroundColor = '#333333';
//     // }
//     body.classList.toggle('colored');
// });

// const btn3 = document.querySelector('.three');
// const firstContainer = document.querySelector('.first-container');

// btn3.addEventListener('click', () => {
//     // if (firstContainer.classList.contains('hidden')) {
//     //     firstContainer.classList.remove('hidden');
//     // } else {
//     //     firstContainer.classList.add('hidden');
//     // }
//     firstContainer.classList.toggle('hidden');
// });

// const ul = document.querySelector('ul');
// const container = document.querySelector('.first-container');
// // const html = document.documentElement;

// // // console.log(ul.parentNode);
// // // console.log(ul.parentElement);

// // console.log(html.parentElement);
// // console.log(html.parentNode);

// // console.log(ul.childNodes);
// // console.log(ul.firstChild);
// // console.log(ul.lastChild);

// // console.log(ul.children);
// // console.log(ul.firstElementChild);
// // console.log(ul.lastElementChild);

// console.log(container.childNodes);
// // console.log(ul.previousSibling);
// // console.log(ul.nextSibling);
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

// window.addEventListener('click', () => console.log('WINDOW'));
// document.addEventListener('click', () => console.log('DOCUMENT'));
// document.querySelector('#boxes').addEventListener('click', () => console.log('LEVEL1'));
// document.querySelector('.level2').addEventListener('click', (e) => {
//     e.stopPropagation();
//     console.log('LEVEL2')
// });
// document.querySelector('.level3').addEventListener('click', (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log('LEVEL3')
// });

// document.querySelector('#bmw').addEventListener('click', (e) => {
//     console.log('bmw is clicked');
//     const target = e.target;
//     if (target.matches('li')) {
//         target.style.color = 'red';
//     }
// })

// document.querySelector('#cars').addEventListener('click', (e) => {
//     console.log(e.target.getAttribute('id'), 'is clicked');

//     const target = e.target;
//     if (target.matches('li')) {
//         if (target.style.backgroundColor === '') {
//             target.style.backgroundColor = 'grey';
//         } else {
//             target.style.backgroundColor = '';
//         }
//     }
// })

// const cars = document.querySelector('#cars');
// const newCar = document.createElement('li');
// newCar.innerText = 'Fiat';
// newCar.setAttribute('id', 'fiat');
// cars.append(newCar);

const message = document.querySelector('#message');
const input = document.querySelector('#name');
const btn = document.querySelector('#send');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
    body.style.backgroundColor = input.value;
});

// btn.addEventListener('click', () => {
//     if (!input.value) {
//         message.innerText = '';
//     } else {
//         message.innerText = `Hello ${input.value}!`;
//     }
//     input.value = '';
// });