import './style.css'

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


  <main class="tattoo-info-page about-page">

    <section class="about-artist">

      <div class="about-artist-content">

        <h1>
          ЗА НАС
        </h1>


        <p class="about-artist-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer vitae justo nec magna feugiat tincidunt.
          Curabitur posuere, libero at fermentum tincidunt,
          lorem ipsum consequat erat, vitae tincidunt lorem
          ipsum vitae justo.
        </p>


        <p class="about-artist-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse potenti. Donec vitae augue at lacus
          tincidunt consectetur. Sed euismod, neque at
          ullamcorper feugiat, justo lorem consequat massa,
          vitae fermentum lorem ipsum nec elit.
        </p>


        <p class="about-artist-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Praesent vitae lorem at ipsum dignissim faucibus.
          Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae.
        </p>

      </div>


      <div class="about-artist-image">

        <img
          src="/images/profilna_snimka.jpg"
          alt="Татуист в Obsidian Body Art"
        >

      </div>

    </section>

  </main>

  <footer class="site-footer">

    <div>
      OBSIDIAN
    </div>

    <div>
      TATTOO & PIERCING · SOFIA
    </div>

  </footer>

`

import './header.js'