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

    <section class="tattoo-info-hero">

      <div class="tattoo-info-content">

        <h1>
          ТАТУИРОВКИ
        </h1>

        <p class="tattoo-info-text">
          В Obsidian Body Art създаваме уникални татуировки,
          които разказват вашата история. Независимо дали
          търсите фотореалистичен портрет, смел blackwork
          дизайн или деликатна минималистична линия,
          нашият екип ще превърне вашата визия в реалност.
        </p>

        <div class="tattoo-care">

  <h2>
    Грижа за татуировка
  </h2>

  <p>
    Мийте татуировката 2-3 пъти дневно с хладка вода и антибактериален сапун.
    Нанасяйте много тънък слой специализиран крем или Бепантен.
    Не докосвайте и не чешете мястото с мръсни ръце.
    Не белете образувалите се корички, за да не повредите буквите.
    Избягвайте басейни, море, сауни и солариум през първите 3 седмици.
    Носете широки дрехи, за да избегнете триене върху надписа.
    Използвайте слънцезащитен крем SPF 50+ след пълното зарастване.
  </p>

</div>



      </div>


      <div class="tattoo-info-image">

        <img
          src="/images/Tattoo/tattoo-17.jpg"
          alt="Татуировка в Obsidian Body Art"
        >

      </div>

    </section>

  </main>

`
import './header.js'