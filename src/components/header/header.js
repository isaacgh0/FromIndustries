import icon from '../../assets/icons/brand-icon.svg'

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

    img.src = `${icon}`

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

  reload() {
    const url = new URL(window.location.href)
    const active = this.querySelector('a.active')
    const next = this.querySelector(`a[href="${url.pathname}"]`)
    
    active && active.classList.remove('active')
    next && next.classList.add('active')
  }
}

customElements.define('fi-header', Header)