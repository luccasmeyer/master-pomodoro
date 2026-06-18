import { formatarTempo } from './functions/timerLogic.js';

const displayTempo = document.getElementById('timer-display');
const btnStart = document.getElementById('button-start');
const btnStop = document.getElementById('button-stop');
const btnReset = document.getElementById('button-reset');

const TEMPO_INICIAL_MINUTOS = 25;
let tempoRestante = TEMPO_INICIAL_MINUTOS * 60;
let intervalo = null;

displayTempo.textContent = formatarTempo(tempoRestante);

function iniciarPomodoro() {
    if (intervalo) return; 

    intervalo = setInterval(() => {
        tempoRestante--;
        displayTempo.textContent = formatarTempo(tempoRestante);

        if (tempoRestante <= 0) {
            pararPomodoro();
            alert('Pomodoro Finalizado! Hora de descansar.');
        }
    }, 1000);
}

function pararPomodoro() {
    clearInterval(intervalo);
    intervalo = null;
}

function resetarPomodoro() {
    pararPomodoro();
    tempoRestante = TEMPO_INICIAL_MINUTOS * 60;
    displayTempo.textContent = formatarTempo(tempoRestante);
}

btnStart.addEventListener('click', iniciarPomodoro);
btnStop.addEventListener('click', pararPomodoro);
btnReset.addEventListener('click', resetarPomodoro);