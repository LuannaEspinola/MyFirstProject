const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
/*Configuração pro mario pular*/
const jump = () => {
    mario.classList.add('jump');

     setTimeout(() => {

        mario.classList.remove('jump');

     }, 500);
}

const loop = setInterval(() => {

    /*configuração pro mario colidir com o cano*/
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    /*Configuração pro Mario 'morrer' ao bater */ 
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'pictures/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);
    }
}, 10);

 /*adicionar qualquer tecla do teclado para pular */
document.addEventListener('keydown', jump);