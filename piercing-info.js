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


  <main class="tattoo-info-page">

    <section class="tattoo-info-hero piercing-info-hero">

      <div class="tattoo-info-content">

       

        <h1>
          ПИЪРСИНГИ
        </h1>

        <p class="tattoo-info-text">
          Предлагаме професионално пробиване с игла с висококачествени
          бижута от хирургична стомана, титан и злато.
          Вашата безопасност е наш приоритет - използваме
          само стерилно еднократно оборудване и спазваме
          най-високите хигиенни стандарти.
        </p>

        <div class="piercing-care">

  <h2>
    Грижа за пиърсинг
  </h2>

  <p>
    Почиствайте пиърсинга 2 пъти дневно със солен разтвор.
    Избягвайте да докосвате пиърсинга с мръсни ръце.
    Не сменяйте бижуто преди пълно зарастване (4-12 седмици).
    Избягвайте басейни, сауни и солариум през първите седмици.
    Не въртете и не дърпайте бижуто.
    При признаци на инфекция се консултирайте с нас или лекар.
  </p>

</div>

       

      </div>


      <div class="tattoo-info-image">

        <img
          src="/images/Piercing/piercing-19.jpg"
          alt="Пиърсинг"
        >

      </div>

    </section>

  </main>
<footer class="piercing-footer"></footer>
`

import './header.js'