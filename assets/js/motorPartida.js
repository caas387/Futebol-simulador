let intervaloPartida;
let minutoAtual = 0;
let tempoTotal = 90;
let partidaPausada = false;
segundoTempo = false;

function simularEvento(timeA, timeB, onEvento) {
    if (partidaPausada) return;

    const probEvento = 0.2;
    if (Math.random() < probEvento) {
        const time = Math.random() < 0.5 ? timeA : timeB;
        if (!time || !Array.isArray(time.starters) || time.starters.length === 0) return;

        const jogador = time.starters[Math.floor(Math.random() * time.starters.length)];
        const evento = gerarEventoAleatorio(time, jogador);
        onEvento(evento, time, jogador);
    }
}

function iniciarPartida(timeA, timeB, atualizarUI, finalizar) {
    // Não resetar minutoAtual para manter o tempo corrente
    partidaPausada = false;
    adicionarMensagem("🔔 Início do Jogo!", true);

    intervaloPartida = setInterval(() => {
        if (partidaPausada) return;

        minutoAtual++;
        atualizarUI(minutoAtual);

        simularEvento(timeA, timeB, (evento, time, jogador) => {
            adicionarMensagem(`⚽ Evento: ${evento} pelo time ${time.name}, jogador ${jogador.name}`, false);
        });

        if (minutoAtual === 45 && !segundoTempo) {
            adicionarMensagem("⏸ Intervalo de Jogo!", true);
            pausarPartida();
            document.getElementById("simulacaoJogo").style.display = "none";
            document.getElementById("intervalo").style.display = "block";
            segundoTempo = true; // marca que o intervalo já ocorreu
        }

        if (minutoAtual >= tempoTotal) {
            adicionarMensagem("🏁 Fim do Jogo!", true);
            clearInterval(intervaloPartida);
            finalizar();
        }
    }, 1000);
}

function iniciarSegundoTempo() {
    partidaPausada = false;
    document.getElementById("intervalo").style.display = "none";
    document.getElementById("simulacaoJogo").style.display = "block";

    // minutoAtual continua de onde parou, não precisa alterar
    iniciarPartida(timeA, timeB, atualizarTimer, finalizarPartida);
}

function encerrarPartidaUsuario() {
    const confirmar = confirm("Tem certeza que deseja encerrar a partida?");
    if (confirmar) {
        adicionarMensagem("🚨 Partida encerrada pelo usuário.", true);
        clearInterval(intervaloPartida);
        finalizarPartida();
    }
}

function pausarPartida() {
    partidaPausada = true;
}

function continuarPartida() {
    partidaPausada = false;
}

function finalizarPartida() {
    clearInterval(intervaloPartida);
}

