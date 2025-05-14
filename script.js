// transicao de imagens
const carouselImages = document.querySelector(".carousel-images");
const carouselImagesContainer = carouselImages ? carouselImages : null;
if (carouselImagesContainer) {
  const images = carouselImagesContainer.querySelectorAll(
    ".carousel-images img"
  );

  const transitionTime = 500;
  let currentImageIndex = 0;

  function slideImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const displacement = -currentImageIndex * 100;

    carouselImagesContainer.style.transition = `transform ${transitionTime}ms ease-in-out`;
    carouselImagesContainer.style.transform = `translateX(${displacement}%)`;
  }

  setInterval(slideImage, 5000);
}

// acessibilidade
let tamanhoFonteBase = 15;
let modoEscuroAtivo = false;

function aumentarFonte() {
  if (tamanhoFonteBase < 25) {
    tamanhoFonteBase += 5;
    document.documentElement.style.fontSize = `${tamanhoFonteBase}px`;
    localStorage.setItem("fontSize", tamanhoFonteBase);
  }
}

function diminuirFonte() {
  if (tamanhoFonteBase > 10) {
    tamanhoFonteBase -= 5;
    document.documentElement.style.fontSize = `${tamanhoFonteBase}px`;
    localStorage.setItem("fontSize", tamanhoFonteBase);
  }
}

function resetarFonte() {
  tamanhoFonteBase = 16;
  document.documentElement.style.fontSize = `${tamanhoFonteBase}px`;
  localStorage.setItem("fontSize", tamanhoFonteBase);
}

function modoEscuro() {
  modoEscuroAtivo = !modoEscuroAtivo;
  document.body.classList.toggle("modo-escuro", modoEscuroAtivo);
  localStorage.setItem("darkMode", modoEscuroAtivo);
}

if (localStorage.getItem("fontSize")) {
  tamanhoFonteBase = parseInt(localStorage.getItem("fontSize"));
  document.documentElement.style.fontSize = `${tamanhoFonteBase}px`;
}

if (localStorage.getItem("darkMode") === "true") {
  modoEscuroAtivo = true;
  document.body.classList.add("modo-escuro");
}
