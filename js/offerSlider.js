var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".destnaitonSlider", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    280: {
      slidesPerView: 1.3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1.4,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
