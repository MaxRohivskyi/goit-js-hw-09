const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    body: document.querySelector('body')
};

const {startBtn, stopBtn, body } = refs;

startBtn.addEventListener('click', onChangeColorBg);
stopBtn.addEventListener('click', stopChangeColorBg);

let timerId = null;

function onChangeColorBg() {
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startBtn.setAttribute('disabled', 'true')
};

function stopChangeColorBg() {
    clearInterval(timerId);
    body.style.backgroundColor = '';
    startBtn.removeAttribute('disabled', 'false');
    stopBtn.removeAttribute('disabled', 'false');
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};