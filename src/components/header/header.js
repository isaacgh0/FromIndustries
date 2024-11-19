class Header extends HTMLElement {
  links = [
    { href: '/',          text: 'Inicio' },
    { href: '/productos', text: 'Productos' },
    { href: '/nosotros',  text: 'Acerca de' },
    { href: '/contacto',  text: 'Contacto' }
  ]

  constructor() {
    super()
  }

  connectedCallback() {
    const url = new URL(window.location.href)

    const header = document.createElement('header')
    const img = document.createElement('img')
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')

    img.src = './src/assets/icons/brand-icon.svg'

    nav.appendChild(ul)
    header.appendChild(img)
    header.appendChild(nav)

    this.links.forEach(({ href, text }) => {
      const li = document.createElement('li')
      const a = document.createElement('a')

      a.href = href
      a.textContent = text

      if (url.pathname === href) {
        a.classList.add('active')
        a.addEventListener('click', e => e.preventDefault())
      }

      li.appendChild(a)
      ul.appendChild(li)
    })

    this.appendChild(header)
  }
}

customElements.define('fi-header', Header)