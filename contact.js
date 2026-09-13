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


  <main class="contact-page">

    <section class="contact-section-page">

      <div class="contact-heading">

        <h1>
          КОНТАКТИ
        </h1>

      </div>


      <div class="contact-layout">

        <div class="contact-information">

<div class="contact-detail">

  <span class="contact-label">
    <span class="contact-icon phone-icon">☎</span>
    ТЕЛЕФОН
  </span>

  <a href="tel:0888457997">
    0888 457 997
  </a>

</div>


<div class="contact-detail">

  <span class="contact-label">
    <span class="contact-icon email-icon">✉</span>
    ИМЕЙЛ
  </span>

  <a href="mailto:obsidian@studio.com">
    obsidian@studio.com
  </a>

</div>


<div class="contact-detail">

  <span class="contact-label">

    <svg
      class="contact-icon social-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
      />
    </svg>

    INSTAGRAM

  </span>

  <a
    href="https://www.instagram.com/obsidian_body_art/"
    target="_blank"
    rel="noopener noreferrer"
  >
    @obsidian_body_art
  </a>

</div>


<div class="contact-detail">

  <span class="contact-label">

    <svg
      class="contact-icon social-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1z"
        fill="currentColor"
      />
    </svg>

    FACEBOOK

  </span>

  <a
    href="https://www.facebook.com/Obsidian.Body.Art?locale=bg_BG"
    target="_blank"
    rel="noopener noreferrer"
  >
    Obsidian Body Art
  </a>

</div>


<div class="contact-detail">

  <span class="contact-label">

    <svg
      class="contact-icon social-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M15 4v9.2a4.8 4.8 0 1 1-4-4.7v3.1a1.8 1.8 0 1 0 1 1.6V4h3z"
        fill="currentColor"
      />
      <path
        d="M15 4c.5 1.7 1.7 3 3.5 3.6"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>

    TIKTOK

  </span>

  <a
    href="https://www.tiktok.com/@obsidian_body_art"
    target="_blank"
    rel="noopener noreferrer"
  >
    @obsidian_body_art
  </a>

</div>

        </div>


        <div class="contact-map">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2073.7794273314485!2d23.247512344191257!3d42.6874778426381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa9b2fa1b97ba3%3A0xfe789e712e33a5a1!2sObsidian%20Body%20Art%20Tattoo%20%26%20Piercing!5e0!3m2!1sbg!2sbg!4v1787491568511!5m2!1sbg!2sbg"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>

        </div>

      </div>

    </section>

  </main>

`

import './header.js'