import { formatarTempo } from './functions/timerLogic.js';
import { createTask } from './functions/createTask.js';

const displayTempo = document.getElementById('timer-display');
const btnStart = document.getElementById('button-start');
const btnStop = document.getElementById('button-stop');
const btnReset = document.getElementById('button-reset');
const nameTask = document.getElementById('name-task');
const btnAddTask = document.getElementById('add-task');
const btnSetTime = document.getElementById('button-settime');

const TEMPO_INICIAL_MINUTOS = 1;
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

function addTask(){
    const text = nameTask.value;

    if (text.trim() === '') return;

    createTask(text);

    nameTask.value = '';
}

function setTime(){
    const time = document.getElementById('set-text');
    const timeValue = time.value;

    tempoRestante = timeValue
    displayTempo.textContent = formatarTempo(tempoRestante);
}

btnStart.addEventListener('click', iniciarPomodoro);
btnStop.addEventListener('click', pararPomodoro);
btnReset.addEventListener('click', resetarPomodoro);
btnAddTask.addEventListener('click', addTask);
btnSetTime.addEventListener('click', setTime);