const painelMensagens = document.getElementById("painelMensagens");

const eventos = [
    { texto: "Gol incrível de", emoji: "⚽" },
    { texto: "Defesa espetacular do goleiro", emoji: "🧤" },
    { texto: "Falta cometida por", emoji: "🚩" },
    { texto: "Cartão amarelo para", emoji: "🟨" },
    { texto: "Cartão vermelho para", emoji: "🟥" },
    { texto: "Substituição: sai", emoji: "🔄" },
    { texto: "Chance clara de gol para", emoji: "🔥" },
    { texto: "Bola na trave para", emoji: "🌟" },
    { texto: "Lançamento preciso de", emoji: "📢" },
    { texto: "Contra-ataque rápido de", emoji: "🏃‍♂️" },
    { texto: "Passe espetacular de", emoji: "🎯" },
    { texto: "Pressão intensa da defesa de", emoji: "🛡️" },
    { texto: "Chute para fora de", emoji: "❌" },
    { texto: "Jogador lesionado: ", emoji: "🤕" },
    { texto: "Cobrança de falta perigosa por", emoji: "⚡" },
    { texto: "Escanteio para", emoji: "⚠️" },
    { texto: "Bola dominada por", emoji: "🏅" },
    { texto: "Jogo truncado entre", emoji: "⚔️" },
    { texto: "Drible desconcertante de", emoji: "💨" },
    { texto: "Gol contra de", emoji: "😵" },
    { texto: "Um OVNI sobrevoa o estádio!", emoji: "🛸" }
];

function adicionarMensagem(texto, especial = false) {
    const p = document.createElement("p");
    p.classList.add("mb-0");
    if (especial) p.classList.add("special");
    p.textContent = texto;
    painelMensagens.appendChild(p);
    painelMensagens.scrollTop = painelMensagens.scrollHeight;
}

function gerarEventoAleatorio(time, jogador) {
    const evento = eventos[Math.floor(Math.random() * eventos.length)];
    if (evento.texto.includes("OVNI")) {
        return `${evento.emoji} ${evento.texto}`;
    }
    return `${evento.emoji} ${evento.texto} ${jogador.name} (${time.name})`;
}
