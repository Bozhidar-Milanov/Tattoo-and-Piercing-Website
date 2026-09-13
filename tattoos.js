import './style.css'

const tattoos = [
  'tattoo-18.jpg',
  'tattoo-17.jpg',
  'tattoo-16.jpg',
  'tattoo-14.jpg',
  'tattoo-15.jpg',
  'tattoo-13.jpg',
  'tattoo-12.jpg',
  'tattoo-01.jpg',
  'tattoo-11.jpg',
  'tattoo-10.jpg',
  'tattoo-09.jpg',
  'tattoo-06.jpg',
  'tattoo-08.jpg',
  'tattoo-07.jpg',
  'tattoo-04.jpg',
  'tattoo-05.jpg',
  'tattoo-03.jpg',
  'tattoo-02.jpg'
]


document.querySelector('#app').innerHTML = `

  <header class="site-header">

      <a href="/" class="logo">
  <img
    src="/images/logo.png"
    alt="Obsidian Body Art"
  >
</a>

    <button
  type="button"
  class="mobile-menu-button"
  aria-label="Отвори менюто"
  onclick="
    this.classList.toggle('active');
    this.closest('.site-header').querySelector('.mobile-menu').classList.toggle('active');
  "
>
  <span></span>
  <span></span>
  <span></span>
</button>

<div class="mobile-menu">

  <a href="/">
    Начало
  </a>

  <div class="nav-dropdown mobile-services-dropdown">

    <div class="nav-dropdown-toggle-row">

      <a
        href="/#services"
        class="nav-dropdown-toggle"
      >
        Услуги
      </a>

      <button
        type="button"
        class="nav-dropdown-plus"
        aria-label="Отвори услуги"
        aria-expanded="false"
      >
        +
      </button>

    </div>

    <div class="nav-dropdown-menu">

      <a href="/tattoo-info.html">
        Татуировки
      </a>

      <a href="/piercing-info.html">
        Пиърсинги
      </a>

    </div>

  </div>

 <a href="/about.html">
  За нас
</a>

  <a href="/contact.html">
    Контакти
  </a>



</div>

    <nav class="main-nav">

      <a href="/">
        Начало
      </a>

<div class="nav-dropdown">

  <div class="nav-dropdown-toggle-row">

    <a
      href="/#services"
      class="nav-dropdown-toggle"
    >
      Услуги
    </a>

    <button
      type="button"
      class="nav-dropdown-plus"
      aria-label="Отвори услуги"
      aria-expanded="false"
    >
      +
    </button>

  </div>

  <div class="nav-dropdown-menu">

    <a href="/tattoo-info.html">
      Татуировки
    </a>

    <a href="/piercing-info.html">
      Пиърсинги
    </a>

  </div>

</div>

      <a href="/about.html">
        За нас
      </a>

      <a href="/contact.html">
  Контакти
</a>

    </nav>

  </header>


  <main class="gallery-page">

    <section class="gallery-page-section">

      <div class="section-heading">

        <h1>
          ТАТУИРОВКИ
        </h1>

      </div>


      <div class="tattoo-gallery">

        ${tattoos.map((image) => `

          <article class="tattoo-gallery-card">

            <img
              src="/images/Tattoo/${image}"
              alt="Татуировка"
              loading="lazy"
            >

          </article>

        `).join('')}

      </div>

    </section>

  </main>

`
document.body.insertAdjacentHTML('beforeend', `

  <div class="lightbox" id="lightbox">

    <div class="lightbox-backdrop"></div>

    <button class="lightbox-close" aria-label="Затвори">
      ×
    </button>

    <button class="lightbox-prev" aria-label="Предишна">
      ‹
    </button>

    <div class="lightbox-content">

      <img
        class="lightbox-image"
        src=""
        alt="Татуировка"
      >

    </div>

    <button class="lightbox-next" aria-label="Следваща">
      ›
    </button>

  </div>

`)

const galleryCards = document.querySelectorAll('.tattoo-gallery-card')
const lightbox = document.querySelector('#lightbox')
const lightboxImage = document.querySelector('.lightbox-image')
const lightboxClose = document.querySelector('.lightbox-close')
const lightboxBackdrop = document.querySelector('.lightbox-backdrop')
const lightboxPrev = document.querySelector('.lightbox-prev')
const lightboxNext = document.querySelector('.lightbox-next')

let currentIndex = 0

const images = [...galleryCards].map((card) => {
  return card.querySelector('img').src
})

function openLightbox(index) {
  currentIndex = index

  lightboxImage.src = images[currentIndex]

  lightbox.classList.add('active')

  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightbox.classList.remove('active')

  document.body.style.overflow = ''
}

function showPrevious() {
  currentIndex =
    (currentIndex - 1 + images.length) % images.length

  lightboxImage.src = images[currentIndex]
}

function showNext() {
  currentIndex =
    (currentIndex + 1) % images.length

  lightboxImage.src = images[currentIndex]
}

galleryCards.forEach((card, index) => {

  card.addEventListener('click', () => {
    openLightbox(index)
  })

})

lightboxClose.addEventListener('click', closeLightbox)

lightboxBackdrop.addEventListener('click', closeLightbox)

lightboxPrev.addEventListener('click', showPrevious)

lightboxNext.addEventListener('click', showNext)

document.addEventListener('keydown', (event) => {

  if (!lightbox.classList.contains('active')) {
    return
  }

  if (event.key === 'Escape') {
    closeLightbox()
  }

  if (event.key === 'ArrowLeft') {
    showPrevious()
  }

  if (event.key === 'ArrowRight') {
    showNext()
  }

})

import './header.js'