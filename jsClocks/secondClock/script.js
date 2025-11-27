function tick() {
    document.querySelector('#time').innerText = moment().format('HH:mm:ss');
}
tick();
setInterval(tick, 1000);

const logBtn = document.querySelector('#logBtn');

const logList = document.querySelector('#logList');

logBtn.addEventListener('click', () => {
    const timeOnly = moment().format('HH:mm:ss');

    const li = document.createElement('li');
    const textSpan = document.createElement('span');
    textSpan.innerText = timeOnly;

    li.append(textSpan);
    logList.append(li);
});