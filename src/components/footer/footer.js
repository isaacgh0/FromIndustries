class Footer extends HTMLElement {
  links = [
    [
      { text: 'Productos',       url: '/productos' },
      { text: 'Soporte',         url: '/soporte' },
      { text: 'Acuerdos de uso', url: '/acuerdo-uso' },
      { text: 'Contacto',        url: '/contacto' },
    ],
    [
      { text: 'Acerca de nosotros', url: '/acerca-de' },
      { text: 'Nuestro equipo',     url: '/equipo' },
    ],
  ]
  
  social = [
    { name: 'Linkedin',  url: 'https://mx.linkedin.com/',   icon: 'linkedin-square' },
    { name: 'Instagram', url: 'https://www.instagram.com/', icon: 'instagram' },
    { name: 'twitter',   url: 'https://x.com/',             icon: 'twitter' },
  ]

  constructor() {
    super()
  }

  connectedCallback() {
    const footer = document.createElement('footer')
    const logo = document.createElement('img')
    const mainWrapper = document.createElement('div')
    const bottomWrapper = document.createElement('div')
    const linksWrapper = document.createElement('div')

    this.links.forEach((links) => {
      const list = document.createElement('ul')

      links.forEach(({ text, url }) => {
        const item = document.createElement('li')
        const link = document.createElement('a')

        link.innerText = text
        link.href = url

        item.appendChild(link)
        list.appendChild(item)
      })

      mainWrapper.appendChild(list)
    });

    mainWrapper.classList.add('main-wrapper')

    logo.src = './src/assets/icons/brand-logo.svg'

    this.social.forEach(({ name, url, icon }) => {
      const link = document.createElement('a')
      const linkIcon = document.createElement('img')

      link.href = url

      linkIcon.src = `./src/assets/icons/${icon}.svg`
      linkIcon.alt = name

      link.appendChild(linkIcon)
      linksWrapper.appendChild(link)
    })

    linksWrapper.classList.add('links-wrapper')

    bottomWrapper.classList.add('bottom-wrapper')
    bottomWrapper.appendChild(logo)
    bottomWrapper.appendChild(linksWrapper)

    footer.appendChild(mainWrapper)
    footer.appendChild(mainWrapper)
    footer.appendChild(bottomWrapper)

    this.appendChild(footer)
  }
}

customElements.define('fi-footer', Footer);