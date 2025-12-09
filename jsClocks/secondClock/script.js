function tick() {
    document.querySelector('#time').innerText = moment().format('HH:mm:ss');
}
tick();
setInterval(tick, 1000);

const logBtn = document.querySelector('#logBtn');
const dateToggleBtn = document.querySelector('#dateToggleBtn');
const clearBtn = document.querySelector('#clearBtn');
const logList = document.querySelector('#logList');

let showDate = false;

logBtn.addEventListener('click', () => {
    const timeOnly = moment().format('HH:mm:ss');
    const fullDate = moment().format('DD.MM.YYYY');

    const li = document.createElement('li');

    const textSpan = document.createElement('span');

    textSpan.innerText = showDate
        ?  `${timeOnly} - ${fullDate}`
        : timeOnly;

    const del = document.createElement('button');
    del.innerHTML = '<i class="bi bi-trash"></i>';
    del.classList.add('deleteBtn');

    del.addEventListener('click', () => {
        li.remove();
    });

    li.append(textSpan);
    li.append(del);
    logList.append(li);
});


clearBtn.addEventListener('click', () => {
    logList.innerHTML = "";
})


dateToggleBtn.addEventListener('click', () => {
    showDate = !showDate;
    dateToggleBtn.innerText = showDate ? 'Hide date' : 'Show date';

    [...logList.children].forEach(li => {
        const span = li.querySelector('span');
        const timeOnly = span.innerText.split(' - ')[0];
        const dateOnly = moment().format('DD.MM.YYYY');
        
        if (showDate) {
            span.innerText = `${timeOnly} - ${dateOnly}`;
        } else {
            span.innerText = timeOnly;
        }

    });
})

// 16:35:43 - 27.11.2025
// 16:35:43