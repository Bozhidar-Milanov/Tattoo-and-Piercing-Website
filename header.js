let lastScrollY = window.scrollY

window.addEventListener('scroll', () => {

  const header = document.querySelector('.site-header')

  if (!header) return

  const currentScrollY = window.scrollY

  if (currentScrollY <= 20) {
    header.style.transform = 'translateY(0)'
  } else if (currentScrollY > lastScrollY) {
    header.style.transform = 'translateY(-100%)'
  } else {
    header.style.transform = 'translateY(0)'
  }

  lastScrollY = currentScrollY

})


document.addEventListener('click', (event) => {

 

  const plus = event.target.closest('.nav-dropdown-plus')

  if (plus) {

    const dropdown = plus.closest('.nav-dropdown')

    if (!dropdown) return

    const isOpen = dropdown.classList.toggle('open')

    plus.textContent = isOpen ? '−' : '+'

    plus.setAttribute(
      'aria-expanded',
      isOpen ? 'true' : 'false'
    )

  }

})