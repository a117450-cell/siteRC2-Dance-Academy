// Lista de frases motivacionais
const frases = [
  "A dança é a linguagem escondida da alma.",
  "Dançar é como sonhar com os pés.",
  "A persistência é o caminho do êxito na dança.",
  "Não é apenas movimento, é expressão e sentimento.",
  "Sente a música e deixa que o teu corpo conte a história.",
  "Acredita no teu ritmo e nunca pares de dançar!"
];

// Mostra a frase aleatória automaticamente ao entrar na página
function gerarFrase() {
  const elementoFrase = document.getElementById("frase-motivacional");
  if (elementoFrase) {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    elementoFrase.textContent = frases[indiceAleatorio];
  }
}

// Incrementa o contador de visitas automaticamente ao entrar na página
function contarVisita() {
  const elementoContador = document.getElementById("contador");
  let visitas = parseInt(localStorage.getItem("visitas_dance_academy")) || 0;
  visitas++;
  localStorage.setItem("visitas_dance_academy", visitas);

  if (elementoContador) {
    elementoContador.textContent = "Visitas: " + visitas;
  }
}

// Funções dos botões remanescentes
function mostrarMensagem() {
  const msgBox = document.getElementById("mensagem-agradecimento");
  if (msgBox) {
    msgBox.textContent = "Obrigado por visitares a Dance Academy! Esperamos ver-te em breve numa das nossas aulas.";
  }
}

function mudarCor() {
  const cores = ["#f8f9fa", "#e9ecef", "#dee2e6", "#f0f4f8", "#fff0f5"];
  const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
  document.body.style.backgroundColor = corAleatoria;
}

function modoEscuro() {
  document.body.classList.toggle("dark-mode");
}

function enviarContacto(event) {
  event.preventDefault();
  const status = document.getElementById("status-envio");
  if (status) {
    status.textContent = "Mensagem enviada com sucesso! Entraremos em contacto brevemente.";
  }
}

// Executar automaticamente ao carregar o site
document.addEventListener("DOMContentLoaded", function () {
  gerarFrase();
  contarVisita();
});