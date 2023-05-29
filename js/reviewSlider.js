document.addEventListener("DOMContentLoaded", function () {
  new Splide("#new-product", {
    type: "loop",
    perPage: 2,
    perMove: 1,
    gap: "30px",
    breakpoints: {
      1024: {
        perPage: 2,
      },
      767: {
        perPage: 2,
      },
      640: {
        perPage: 1,
      },
      autoScroll: {
        speed: 2,
      },
      autoScroll: {
        speed: 1,
      },
    },
    pagination: false,
  }).mount(window.splide.Extensions);
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#blogContainer", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: "30px",
    breakpoints: {
      1024: {
        perPage: 3,
      },
      767: {
        perPage: 2,
      },
      640: {
        perPage: 1,
      },
      autoScroll: {
        speed: 1,
      },

      // autoScroll: {
      //   speed: 1,
      // },
    },
    pagination: false,
  }).mount(window.splide.Extensions);
});
