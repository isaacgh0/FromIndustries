class Header extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const url = new URL(window.location.href)

    const header = document.createElement('header')
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')

    nav.appendChild(ul)
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

      url.pathname === link.href && a.classList.add('active')

      li.appendChild(a)
      ul.appendChild(li)
    })

    this.appendChild(header)
  }
}

customElements.define('fi-header', Header)