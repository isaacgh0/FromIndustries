class Header extends HTMLElement {
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

    const links = [
      { href: '/', text: 'Home' },
      { href: '/about', text: 'About' },
      { href: '/contact', text: 'Contact' }
    ]

    links.forEach(link => {
      const li = document.createElement('li')
      const a = document.createElement('a')

      a.href = link.href
      a.textContent = link.text

      if (url.pathname === link.href) {
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