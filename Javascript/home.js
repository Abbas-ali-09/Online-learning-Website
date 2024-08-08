var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      sliderPerView: 1,
    },
    786: {
      sliderPerView: 2,
    },
    1020: {
      sliderPerView: 3,
    },
  },
});
