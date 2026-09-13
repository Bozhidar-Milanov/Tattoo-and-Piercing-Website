import './style.css'

window.history.scrollRestoration = 'manual'

window.scrollTo(0, 0)


const tattoos = [
  'tattoo-01.jpg',
  'tattoo-02.jpg',
  'tattoo-03.jpg',
  'tattoo-04.jpg',
  'tattoo-05.jpg',
  'tattoo-06.jpg',
  'tattoo-07.jpg',
  'tattoo-08.jpg'
]


const piercings = [
  'piercing-01.jpeg',
  'piercing-02.jpg',
  'piercing-03.jpg',
  'piercing-04.jpg',
  'piercing-05.jpg',
  'piercing-06.jpg',
  'piercing-07.jpg',
  'piercing-08.jpg',
  'piercing-09.jpg',
  'piercing-10.jpg'
]


const galleryItems = [

  ...tattoos.map((image) => ({
    image: `/images/Tattoo/${image}`,
    category: 'tattoo'
  })),

  ...piercings.map((image) => ({
    image: `/images/Piercing/${image}`,
    category: 'piercing'
}))

]


document.querySelector('#app').innerHTML = `

  <header class="site-header">

    <a href="/" class="logo">
  <img
    src="/images/logo.png"
    alt="Obsidian Body Art"
  >
</a>

    <button class="mobile-menu-button" aria-label="Open menu">
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

</nav>
    

  </header>


  <main>


    <!-- HERO -->

<section class="hero">

  <div class="hero-image"></div>

  <div class="hero-overlay"></div>

  <h1 class="hero-brand">
    OBSIDIAN BODY ART
    <span class="hero-brand-sub">ИЗВЪНЗЕМНИ ТАТУИРОВКИ И ПИЪРСИНГ</span>
  </h1>

  <a
    href="/contact.html"
    class="hero-book-button"
  >
    Запази час
  </a>

  <div class="hero-scroll">

    <span>
      SCROLL TO EXPLORE
    </span>

    <span class="scroll-line"></span>

  </div>

</section>



    <!-- SERVICES -->

    <section
      id="services"
      class="services-section"
    >

      <div class="section-heading">

        <h2>
         НАШИТЕ<br />
         УСЛУГИ
        </h2>

      </div>


      <div class="services-grid">


        <!-- TATTOOS -->

        <article class="service-card">

          <div class="service-image">
            <img
              src="/images/Tattoo/tattoo-06.jpg"
              alt="Татуировки"
            >
          </div>

          <div class="service-content">

            <p class="eyebrow">
              01
            </p>

            <h3>
              ТАТУИРОВКИ
            </h3>

            <p>
              Персонални татуировки, създадени според
              вашата идея, стил и индивидуалност.
            </p>

            <a
 href="/tattoo.html"
 class="button button-secondary"
>
 Разгледай татуировките
</a>

           </div>

         </article>


         <!-- PIERCINGS -->

         <article class="service-card">

           <div class="service-image">
             <img
               src="/images/Piercing/piercing-06.jpg"
               alt="Пиърсинг"
             >
           </div>

           <div class="service-content">

             <p class="eyebrow">
               02
             </p>

             <h3>
               ПИЪРСИНГ
             </h3>

             <p>
               Професионален пиърсинг с внимание към
               анатомията, позиционирането и хигиената.
             </p>

             
 <a
  href="/piersing.html"
  class="button button-secondary"
>
  Разгледай пиърсингите
</a>

           </div>

         </article>


      </div>

      <!-- WHY CHOOSE US -->

<section 
  id="why-us"
  class="why-section"
>

  <div class="section-heading">

    <h2>
      ЗАЩО ДА<br />
      ИЗБЕРЕТЕ НАС
    </h2>

  

  </div>


  <div class="why-grid">


    <article class="why-card">

      <span>01</span>

      <h3>
        Индивидуален подход
      </h3>

      <p>
        Насочваме те към стила и артиста, които най-добре пасват на това, което си представяш.
      </p>

    </article>


    <article class="why-card">

      <span>02</span>

      <h3>
        Прецизност
      </h3>

      <p>
        Обръщаме внимание на всеки детайл,
        защото именно те превръщат добрата
        работа в нещо специално.
      </p>

    </article>


    <article class="why-card">

      <span>03</span>

      <h3>
        Високи стандарти
      </h3>

      <p>
        Хигиената, безопасността и правилната
        работа са основа на всяка процедура.
      </p>

    </article>


    <article class="why-card">

      <span>04</span>

      <h3>
        Професионализъм
      </h3>

      <p>
        Стремим се да създаваме спокойна атмосфера
        и професионално отношение към всеки клиент.
      </p>

    </article>


  </div>

</section>

    </section>

    

  </main>

<!-- REVIEWS -->

<section class="reviews-section" id="reviews">

  <div class="reviews-heading">
    <h2>КАКВО МИСЛЯТ НАШИТЕ КЛИЕНТИ</h2>

    <div class="reviews-google-logo">
        <span class="google-blue">G</span><span class="google-red">o</span><span class="google-yellow">o</span><span class="google-blue">g</span><span class="google-green">l</span><span class="google-red">e</span>
      </div>

      <div class="reviews-summary-stars">★★★★★</div>

      <p>На база 80 отзива</p>

    </div>


  <div class="reviews-wrapper">

    <button
      class="reviews-arrow reviews-prev"
      type="button"
      aria-label="Предишни отзиви"
    >
      ‹
    </button>

    <div class="reviews-list" id="reviews-list"></div>

    <button
      class="reviews-arrow reviews-next"
      type="button"
      aria-label="Следващи отзиви"
    >
      ›
    </button>

  </div>

  <a
    class="reviews-all-button"
    href="https://www.google.com/maps/place/Obsidian+Body+Art+Tattoo+%26+Piercing/@42.6887756,23.2452036,17z/data=!4m8!3m7!1s0x40aa9b2fa1b97ba3:0xfe789e712e33a5a1!8m2!3d42.6887756!4d23.2452036!9m1!1b1!16s%2Fg%2F11m_7b9vtt?entry=ttu&g_ep=EgoyMDI2MDkwMS4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
  >
    ВИЖ ВСИЧКИ ОТЗИВИ →
  </a>

</section>

<footer class="site-footer">

  <div>
    OBSIDIAN BODY ART
  </div>

  <div>
    TATTOO & PIERCING · SOFIA
  </div>

</footer>

`

const reviews = [
  {
    name: "Viktoria Garlyanova",
    text: "Изключително любезен и усложлив човек. Обяснява всяка стъпка по процеса на пиърсинга и личи, че харесва работата си. Препоръчвам!"
  },
  {
    name: "Nikol Marinova",
    text: "Изключително внимателен! Предразполагащ, с внимание към детайла. Много внимателно работи. Има лека ръка за пробиване! Обясни подробно как да се грижа за пиърсинга."
  },
  {
    name: "P. Petkova.",
    text: "Дойдох за татуировка, а си тръгнах и с ново уважение към хората, които могат да търпят клиенти като мен накрая. 😅 Страхотен професионалист – много внимателен, спокоен и обяснява всичко. Работи изключително прецизно и си личи, че го прави с огромно желание и внимание към детайла. Татуировката стана точно както си я представях – даже по-хубава! Определено бих го препоръчала на всеки, който иска качествена татуировка и приятно отношение. Благодаря още веднъж, страхотен си! 😇 Пиърсинга също е топ!"
  },
  {
    name: "Bojidar Milanov",
    text: "Много съм доволен от тату студиото и горещо го препоръчвам. Работят професионално както с татуировки, така и с пиърсинг. Татуировката ми стана точно както я исках и си личи вниманието към детайла и качествената изработка. Цените са много добри и напълно отговарят на качеството. Също така съм много доволен от отношението – човекът е любезен, обяснява всичко спокойно и те кара да се чувстваш комфортно. Със сигурност бих посетил отново."
  },
  {
    name: "M. A.",
    text: "Много съм доволна от пиърсинга на пъпа! Процедурата мина бързо и спокойно, а той беше много внимателен и професионален през цялото време. Работи чисто и прецизно и си личи, че знае какво прави. Резултатът е супер красив и определено бих препоръчала."
  },
  {
    name: "Жоржета Георгиева",
    text: "Останах изключително доволна! Дани има подход и знае как да общува с клиентите си, така че да угоди на всяко тяхно желание - от изготвянето на дизайна на татуса до финалното му изпълнение. Направихме си matching tattoos със съпруга ми, и двамата останахме очаровани от отношението! При нужда и интерес от наша страна обяснява в детайли всичко, което извършва и е много внимателен! Препоръчвам с две ръце!"
  },
  {
    name: "Ekaterina Petrova",
    text: "Бях изключително очарована и изненадана от добрия резултат, готино момче което не създава напрежение, за разлика от подобни места."
  },
  {
    name: "Снежана Цветкова",
    text: "Невероятен човек! Страхотен професионалист, знае и разбира от работата си. Работи много леко и не усетих болка. Внимателен и отдаден."
  },
  {
    name: "Ванеса Владайчева",
    text: "Днес бях на пиърсинг на носа при Дани и мога да го препоръчам с повече от две ръце. Това момче е уникално, наистина знае какво прави и си разбира от работата което е най-важното. Пожелавам му само напред и нагоре, защото той го заслужава. Успех Дани!"
  },
  {
    name: "Viki Tofik",
    text: "Чудесно отношение и професионална работа! Данаил ми помогна с избора, даде полезни съвети и беше много внимателен. Изборът от обеци е много голям и материалът е качествен. Направих си хеликс и трета дупка на ухото, много съм доволна."
  }
];

let reviewStart = 0;

function renderReviews() {
  const container = document.querySelector("#reviews-list");

  if (!container || reviews.length === 0) return;

  container.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    const review = reviews[(reviewStart + i) % reviews.length];

    container.innerHTML += `
      <article class="review-card">
        <div class="review-stars">★★★★★</div>

        <p class="review-text">
          ${review.text}
        </p>

        <div class="review-author">
          ${review.name}
        </div>

        <div class="review-source">
          Google Review
        </div>
      </article>
    `;
  }
}

function nextReview() {
  reviewStart = (reviewStart + 1) % reviews.length;
  renderReviews();
}

function prevReview() {
  reviewStart =
    (reviewStart - 1 + reviews.length) % reviews.length;

  renderReviews();
}

const nextReviewButton = document.querySelector(".reviews-next");
const prevReviewButton = document.querySelector(".reviews-prev");

if (nextReviewButton) {
  nextReviewButton.addEventListener("click", nextReview);
}

if (prevReviewButton) {
  prevReviewButton.addEventListener("click", prevReview);
}

renderReviews();




// ========================================
// LIGHTBOX
// ========================================

const galleryCards = Array.from(
  document.querySelectorAll('.gallery-card')
)

const mobileMenuButton =
  document.querySelector('.mobile-menu-button')

const mobileMenu =
  document.querySelector('.mobile-menu')


mobileMenuButton.addEventListener('click', () => {

  mobileMenu.classList.toggle('active')

  mobileMenuButton.classList.toggle('active')

})

const mobileMenuLinks =
  mobileMenu.querySelectorAll('a')


mobileMenuLinks.forEach((link) => {

  link.addEventListener('click', () => {

    mobileMenu.classList.remove('active')

    mobileMenuButton.classList.remove('active')

  })

})


const lightbox =
  document.createElement('div')


lightbox.className = 'lightbox'


lightbox.innerHTML = `

  <div class="lightbox-backdrop"></div>

  <div class="lightbox-content">

    <button
      class="lightbox-prev"
      aria-label="Previous image"
    >
      ‹
    </button>

    <button
      class="lightbox-next"
      aria-label="Next image"
    >
      ›
    </button>

    <button
      class="lightbox-close"
      aria-label="Close"
    >
      ×
    </button>

    <img
      class="lightbox-image"
      src=""
      alt=""
    >

  </div>

`


document.body.appendChild(lightbox)


const lightboxImage =
  lightbox.querySelector('.lightbox-image')


const previousButton =
  lightbox.querySelector('.lightbox-prev')


const nextButton =
  lightbox.querySelector('.lightbox-next')


let currentIndex = 0

let visibleGalleryCards = galleryCards.filter(
  card => card.dataset.category === 'tattoo'
)


function showImage(index) {

  if (index < 0) {
    index = visibleGalleryCards.length - 1
  }

  if (index >= visibleGalleryCards.length) {
    index = 0
  }

  currentIndex = index

  const card =
    visibleGalleryCards[currentIndex]

  const image =
    card.querySelector('img')

  lightboxImage.src =
    image.src

  lightboxImage.alt =
    image.alt
}


function openLightbox(index) {

  showImage(index)

  lightbox.classList.add('active')

}


function closeLightbox() {

  lightbox.classList.remove('active')

}


galleryCards.forEach((card) => {

  card.addEventListener('click', () => {

    visibleGalleryCards =
      galleryCards.filter(
        item => item.dataset.category === card.dataset.category
      )

    const index =
      visibleGalleryCards.indexOf(card)

    openLightbox(index)

  })

})


previousButton.addEventListener(
  'click',
  () => {

    showImage(currentIndex - 1)

  }
)


nextButton.addEventListener(
  'click',
  () => {

    showImage(currentIndex + 1)

  }
)


lightbox
  .querySelector('.lightbox-close')
  .addEventListener(
    'click',
    closeLightbox
  )


lightbox
  .querySelector('.lightbox-backdrop')
  .addEventListener(
    'click',
    closeLightbox
  )


document.addEventListener(
  'keydown',
  (event) => {

    if (!lightbox.classList.contains('active')) {
      return
    }


    if (event.key === 'Escape') {

      closeLightbox()

    }


    if (event.key === 'ArrowLeft') {

      showImage(currentIndex - 1)

    }


    if (event.key === 'ArrowRight') {

      showImage(currentIndex + 1)

    }

  }
)



// ========================================
// FILTERS
// ========================================

const filterButtons =
  document.querySelectorAll('.filter-button')


filterButtons.forEach((button) => {

  button.addEventListener('click', () => {

    const filter =
      button.dataset.filter
    visibleGalleryCards =
      galleryCards.filter(
        card => card.dataset.category === filter
  )

    currentIndex = 0




    filterButtons.forEach((btn) => {

      btn.classList.remove('active')

    })


    button.classList.add('active')


    galleryCards.forEach((card) => {

      const category =
        card.dataset.category


      if (
        filter === 'all' ||
        category === filter
      ) {

        card.classList.remove('hidden')

      } else {

        card.classList.add('hidden')

      }

    })

  })

})


// Show tattoos by default

galleryCards.forEach((card) => {

  if (card.dataset.category === 'tattoo') {

    card.classList.remove('hidden')

  } else {

    card.classList.add('hidden')

  }

})

import './header.js'

