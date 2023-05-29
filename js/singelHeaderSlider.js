document.addEventListener("DOMContentLoaded", function () {
  new Splide("#new-product", {
    type: "loop",
    perPage: 1, // Number of visible slides
    gap: "30px", // Gap between slides

    pagination: true,
    breakpoints: {
      1024: {
        perPage: 1,
      },
      767: {
        perPage: 1,
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
    classes: {
      pagination: "splide__pagination your-class-pagination",
      page: "splide__pagination__page your-class-page",
    },
  }).mount();
});
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#sliderGloben", {
    perPage: 2.2, // Number of visible slides
    gap: "30px", // Gap between slides

    pagination: false,
    breakpoints: {
      1024: {
        perPage: 1,
      },
      767: {
        perPage: 1,
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
    classes: {
      pagination: "splide__pagination your-class-pagination",
      page: "splide__pagination__page your-class-page",
    },
  }).mount();
});
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#sliderDiamond", {
    perPage: 2, // Number of visible slides
    gap: "30px", // Gap between slides

    pagination: false,
    breakpoints: {
      1024: {
        perPage: 1,
      },
      767: {
        perPage: 1,
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
    classes: {
      pagination: "splide__pagination your-class-pagination",
      page: "splide__pagination__page your-class-page",
    },
  }).mount();
});
document.addEventListener("DOMContentLoaded", function () {
  var main = new Splide("#image-carousel", {
    type: "fade",
    rewind: true,
    pagination: false,
    arrows: false,
  });

  var thumbnails = new Splide("#thumbnail-carousel", {
    fixedWidth: 100,
    fixedHeight: 60,
    gap: "30px",
    rewind: true,
    pagination: false,
    arrows: false,

    isNavigation: true,
    breakpoints: {
      600: {
        fixedWidth: 60,
        fixedHeight: 44,
      },
    },
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
});
