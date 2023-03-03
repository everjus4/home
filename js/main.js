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

// FAQs lists
const faqData = [
  {
    question: 'Sed ut perspiciatis unde omnis ?',
    answer:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores ratione voluptatem sequi nesciunt.',
  },
  {
    question: 'Quis autem vel eum iure reprehenderit ?',
    answer:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores ratione voluptatem sequi nesciunt.',
  },
  {
    question: 'Sed ut perspiciatis unde omnis..?',
    answer:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores ratione voluptatem sequi nesciunt.',
  },
]

const faqsContainer = document.getElementsByClassName('FAQs-container')[0]
faqData.map((item) => {
  let faqItem = document.createElement('div')
  faqItem.classList.add('faq-item')

  let markup = `
            <div class="item-question">
                <span class="question-text"><img src="./images/about/icon.svg" alt="">    ${item.question}</span>
                <span class="arrows-container">
                    <span class="expand"><img src="./images/about/shevron-down.svg" alt=""></span>
                    <span class="close"><img src="./images/about/shevron-up.svg" alt=""></span>
                </span>
            </div>
            <div class="item-answer">
                <span>${item.answer}</span>
            </div>
    `
  faqItem.innerHTML = markup
  faqsContainer.appendChild(faqItem)
})

const toggleButtons = document.querySelectorAll('.arrows-container')

toggleButtons.forEach((button) => {
  button.addEventListener('click', function (e) {
    faqItem = e.currentTarget.parentElement.parentElement
    faqItem.classList.toggle('show-answer')
  })
})
