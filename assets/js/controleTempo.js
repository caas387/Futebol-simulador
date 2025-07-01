let placarA = 0;
let placarB = 0;
let segundoTempo = false;

const timerElement = document.getElementById("timer");
const barraTempo = document.getElementById("barraTempo");
const nomeTimeAEl = document.getElementById("nomeTimeA");
const nomeTimeBEl = document.getElementById("nomeTimeB");
const placarAEl = document.getElementById("placarA");
const placarBEl = document.getElementById("placarB");

function atualizarTimer(minuto) {
    const minutos = String(Math.floor(minuto / 60)).padStart(2, "0");
    const segundos = String(minuto % 60).padStart(2, "0");
    timerElement.textContent = `${minutos}:${segundos}`;
    barraTempo.style.width = `${(minuto / tempoTotal) * 100}%`;
}

function atualizarPlacar(a, b) {
    placarAEl.textContent = a;
    placarBEl.textContent = b;
}

function iniciarSegundoTempo() {
    segundoTempo = true;
    minutoAtual = 45;
    tempoTotal = 90;
    atualizarTimer(minutoAtual);
    document.getElementById("intervalo").style.display = "none";
    document.getElementById("simulacaoJogo").style.display = "block";
    iniciarPartida(timeA, timeB, atualizarTimer, finalizarPartida);
}