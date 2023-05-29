document.addEventListener("DOMContentLoaded", function () {
    new Splide(".splide", {
        type   : 'loop',
        perPage: 3, // Number of visible slides
        gap: "30px", // Gap between slides
        focus: 'center',
    
        pagination: true,
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
      classes: {
		pagination: 'splide__pagination your-class-pagination',
		page      : 'splide__pagination__page your-class-page',
       },
    }).mount();
  });
  