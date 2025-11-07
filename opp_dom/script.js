class Card {

    constructor(title, text, imageUrl) {
        this.title = title;
        this.text = text;
        this.imageUrl = imageUrl;
        this.element = this.#createCard();
    }

    #createCard() {
        const div = document.createElement('div');
        div.classList.add('card');

        const img = document.createElement('img');
        img.src = this.imageUrl;
        img.alt = this.title;

        const h2 = document.createElement('h2');
        h2.innerText = this.title;

        const p = document.createElement('p');
        p.innerText = this.text;
        
        div.append(img, h2, p);
        return div;
    }

    appendTo(parent) {
        parent.appendChild(this.element);
    }

    static formatCards(cardsArray) {
        return cardsArray.map(card => new Card(card.title, card.text, card.imageUrl));
    }
}

const app = document.querySelector('#app');

// const cards = [
//       new Card(
//         'HTML',
//         'Structure of web pages',
//         'https://cdn-icons-png.flaticon.com/512/732/732212.png'
//       ),
//       new Card(
//         'CSS',
//         'Makes everything look nice',
//         'https://cdn-icons-png.flaticon.com/512/732/732190.png'
//       ),
//       new Card(
//         'JavaScript',
//         'Adds interactivity to websites',
//         'https://cdn-icons-png.flaticon.com/512/5968/5968292.png'
//       ),
//       new Card(
//         'React',
//         'Build reusable UI components easily',
//         'https://cdn-icons-png.flaticon.com/512/919/919851.png'
//       )
//     ];

// cards.forEach(card => card.appendTo(app));

const cards = [
      {
        title: 'HTML',
        text: 'Structure of web pages',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/732/732212.png'
      },
      {
        title: 'CSS',
        text: 'Makes everything look nice',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/732/732190.png'
      },
      {
        title: 'JavaScript',
        text: 'Adds interactivity to websites',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png'
      },
      {
        title: 'React',
        text: 'Build reusable UI components easily',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/919/919851.png'
      }
    ];


Card.formatCards(cards).forEach(card => card.appendTo(app));