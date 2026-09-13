import './style.css'

const piercings = [
  'piercing-25.jpg',
  'piercing-24.jpg',
  'piercing-23.jpg',
  'piercing-22.jpg',
  'piercing-21.jpg',
  'piercing-20.jpg',
  'piercing-19.jpg',
  'piercing-18.jpg',
  'piercing-17.jpg',
  'piercing-16.jpg',
  'piercing-15.jpg',
  'piercing-14.jpg',
  'piercing-13.jpg',
  'piercing-01.jpeg',
  'piercing-11.jpg',
  'piercing-12.jpg',
  'piercing-02.jpg',
  'piercing-03.jpg',
  'piercing-04.jpg',
  'piercing-05.jpg',
  'piercing-06.jpg',
  'piercing-07.jpg',
  'piercing-08.jpg',
  'piercing-09.jpg',
  'piercing-10.jpg',
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
          ПИЪРСИНГИ
        </h1>

      </div>

      <div class="tattoo-gallery">

        ${piercings.map((image) => `

          <article class="tattoo-gallery-card">

            <img
              src="/images/Piercing/${image}"
              alt="Пиърсинг"
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

    <button class="lightbox-close">×</button>

    <button class="lightbox-prev">‹</button>

    <div class="lightbox-content">

      <img
        class="lightbox-image"
        src=""
        alt="Пиърсинг"
      >

    </div>

    <button class="lightbox-next">›</button>

  </div>

`)

const galleryCards =
  document.querySelectorAll('.tattoo-gallery-card')

const lightbox =
  document.querySelector('#lightbox')

const lightboxImage =
  document.querySelector('.lightbox-image')

const lightboxClose =
  document.querySelector('.lightbox-close')

const lightboxBackdrop =
  document.querySelector('.lightbox-backdrop')

const lightboxPrev =
  document.querySelector('.lightbox-prev')

const lightboxNext =
  document.querySelector('.lightbox-next')

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

  lightboxImage.src =
    images[currentIndex]

}

function showNext() {

  currentIndex =
    (currentIndex + 1) % images.length

  lightboxImage.src =
    images[currentIndex]

}

galleryCards.forEach((card, index) => {

  card.addEventListener('click', () => {
    openLightbox(index)
  })

})

lightboxClose.addEventListener(
  'click',
  closeLightbox
)

lightboxBackdrop.addEventListener(
  'click',
  closeLightbox
)

lightboxPrev.addEventListener(
  'click',
  showPrevious
)

lightboxNext.addEventListener(
  'click',
  showNext
)

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