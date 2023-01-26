const slides = document.getElementsByClassName('card');
const modais = document.getElementsByClassName('modal-pai')
let slideAtual = 0

function carousel(i) {
  slideAtual = slideAtual + i;

  if (slideAtual < 0) slideAtual = slides.length - 1;
  if (slideAtual === slides.length) slideAtual = 0;

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add('card-escondido');
  }

  slides[slideAtual].classList.remove('card-escondido');
  slides[slideAtual].scrollIntoView({ behavior: "smooth" });
}

function trocarModal() {
  const estiloModal = modais[slideAtual].classList.contains('card-escondido');
  
  clearInterval(timer)

  if (estiloModal == false) {
    modais[slideAtual].classList.add('card-escondido');
    timer = setInterval(() => {carousel(+ 1);}, 5000);
  } else {
    modais[slideAtual].classList.remove('card-escondido');
  }

}

let timer = setInterval(() => {carousel(+ 1);}, 5000);