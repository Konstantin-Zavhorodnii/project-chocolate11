const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 4,
      breakpoints: {

      175: {
        slidesPerView: 1,
        spaceBetween: 10
      },
        
      375: {
        slidesPerView: 1,
        spaceBetween: 18
      },

      768: {
        slidesPerView: 2.5,
        spaceBetween: 18
      },

      1200: {
        slidesPerView: 4,
        spaceBetween: 18
      }
    }

});
