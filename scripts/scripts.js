// ИЗМЕНЕНИЕ ФОНА ФИКСИРОВАННОГО HEADER

window.addEventListener('scroll', function() {
  if (scrollY > 50) {
    document.querySelector('.header').classList.add('fixed')
  } else {
    document.querySelector('.header').classList.remove('fixed')
  }
})

// HOME SLIDER

const sliderBody = new Swiper(".slider__body", {
  loop: true,
  autoplay: true,
  speed: 1000,
  effect: "fade",
  type: "custom",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".slider-pagination",
    clickable: true,
  },
});

const sliderImages = new Swiper(".slider-images", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

sliderBody.controller.control = sliderImages;
sliderImages.controller.control = sliderBody;

// ABOUT SLIDER

const aboutSlider = new Swiper(".slider-about", {
  loop: true,
  pagination: {
    el: ".slider-about-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".slider-about-button-next",
    prevEl: ".slider-about-button-prev",
  },
});
