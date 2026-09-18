document.addEventListener("DOMContentLoaded", function () {
  
  // 1. ANIMAÇÕES AO ROLAR A TELA (FADE-IN REVEAL)
  const reveals = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.3 }
  );

  reveals.forEach((reveal) => revealObserver.observe(reveal));

  // 2. POPUP PRELOADER COM BARRA DE PROGRESSO (0% A 100%)
  const modal = document.getElementById("preloader-modal");
  const btnEnter = document.getElementById("btn-enter");
  const btnDisable = document.getElementById("btn-disable");
  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressText");
  const modalActions = document.getElementById("modalActions");

  // Verificar se já foi desativado anteriormente
  if (localStorage.getItem("nobre_hide_preloader") === "true") {
    modal.style.display = "none";
  } else {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 2;
      progressBar.style.width = progress + "%";
      progressText.textContent = progress + "%";

      if (progress >= 100) {
        clearInterval(interval);
        progressText.textContent = "Carregado";
        modalActions.style.display = "flex";
      }
    }, 40);
  }

  btnEnter.addEventListener("click", function () {
    modal.style.display = "none";
  });

  btnDisable.addEventListener("click", function () {
    localStorage.setItem("nobre_hide_preloader", "true");
    modal.style.display = "none";
  });

  // 3. CONTROLE DO CARROSSEL
  const track = document.getElementById("carouselTrack");
  const btnLeft = document.getElementById("slideLeft");
  const btnRight = document.getElementById("slideRight");

  btnLeft.addEventListener("click", function () {
    track.scrollBy({ left: -320, behavior: "smooth" });
  });

  btnRight.addEventListener("click", function () {
    track.scrollBy({ left: 320, behavior: "smooth" });
  });
});