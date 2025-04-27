// funçao do botao close

let lastX = null;
let lastY = null;

const btnClose = document.getElementById('btnClose');


btnClose.addEventListener('mouseover', () => {
    const containerBtns = document.getElementById('btns');

    const containerWidth = containerBtns.clientWidth;
    const containerHeight = window.innerHeight * 0.3;

    const btnWidth = btnClose.offsetWidth;
    const btnHeight = btnClose.offsetHeight;

    const maxX = containerWidth - btnWidth;
    const maxY = containerHeight - btnHeight;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    const minDistance = 100;

    while (lastX !== null && Math.abs(randomX - lastX) < minDistance) {
        randomX = Math.random() * maxX;
    }

    while (lastY !== null && Math.abs(randomY - lastY) > minDistance) {
        randomY = Math.random() * maxY;
    }

    lastX = randomX;
    lastY = randomY;

    btnClose.style.transition = 'left 0.1s, top 0.1s';
    btnClose.style.left = `${randomX}px`
    btnClose.style.top = `${randomY}px`
})

// funçao do botap sucess

const btnSucess = document.getElementById('btnSucess');
const txt = document.querySelector('.txt p');

btnSucess.addEventListener('click', () => {
    document.body.style.backgroundColor = 'rgb(128, 14, 67)';
    txt.innerHTML = `<p>O <span id="pokemon">Gengar</span> esta muito feliz!!! Agora o <span id="name">Mateus</span> pode te <span id="love">amar</span> para sempre!</p>`

    const imgSad = document.getElementById('imgSad');
    const imgHappy = document.getElementById('imgHappy');

    imgSad.style.visibility = 'hidden';
    imgHappy.style.visibility = 'visible';
})