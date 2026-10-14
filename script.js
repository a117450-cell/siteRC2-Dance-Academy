// Exemplo 3
function mudarCor() {
  document.body.classList.toggle("fundo-alternativo");
}

// Exemplo 4 
function modoEscuro() {
  document.body.classList.toggle("dark");
}

// Exemplo 1 & 2
function mostrarMensagem() {
  document.getElementById("mensagem-agradecimento").innerText = "Obrigado pela sua visita!";
}

// Exemplo 5 
let visitas = 0;
function contarVisita() {
  visitas++;
  document.getElementById("contador").innerHTML = "Visitas: " + visitas;
}

// Exemplo 6
const frases = [
  "A dança é a linguagem escondida da alma.",
  "Dançar é sonhar com os pés.",
  "A arte transforma vidas."
];

function gerarFrase() {
  const indiceAleatorio = Math.floor(Math.random() * frases.length);
  document.getElementById("frase-motivacional").innerHTML = frases[indiceAleatorio];
}

// Ativador de animação
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      reveals[i].classList.add("active");
    }
  }
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);