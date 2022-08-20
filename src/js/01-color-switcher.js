refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    body: document.querySelector('body')
};

refs.startBtn.addEventListener('click', onChangeColorBg);
refs.stopBtn.addEventListener('click', stopChangeColorBg);

let timerId = null;

function onChangeColorBg() {
    timerId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    refs.startBtn.setAttribute('disabled', 'true')
};

function stopChangeColorBg() {
    clearInterval(timerId);
    refs.body.style.backgroundColor = '';
    refs.startBtn.removeAttribute('disabled', 'false');
    refs.stopBtn.removeAttribute('disabled', 'false');
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};