document.addEventListener('click', function (e) {
  if (e.target.classList.contains('popular__like')) {
    e.target.classList.toggle('popular__like--liked')
  }
})

// init Swiper:
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 5,
  slidesPerGroup: 5,
  spaceBetween: 120,
  initialSlide: 6,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    hashNavigation: {
      watchState: true,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    disabledClass: 'swiper-button-prev swiper-button-next',
  },
})
