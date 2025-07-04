function carregarCarrossel(idContainer, caminhoArquivo) {
  fetch(caminhoArquivo)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById(idContainer).innerHTML = html;

      new Swiper(`#${idContainer} .swiper`, {
        loop: false,
        navigation: {
          nextEl: `#${idContainer} .swiper-button-next`,
          prevEl: `#${idContainer} .swiper-button-prev`,
        },
        autoplay: false, // DESLIGADO
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
        grabCursor: true,
      });
    })
    .catch((err) => console.error("Erro ao carregar carrossel:", err));
}
