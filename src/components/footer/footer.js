import logo from '../../assets/icons/brand-logo.svg'
import linkedin from '../../assets/icons/linkedin-square.svg'
import instagram from '../../assets/icons/instagram.svg'
import twitter from '../../assets/icons/twitter.svg'

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
    { name: 'Linkedin',  url: 'https://mx.linkedin.com/',   icon: `${linkedin}` },
    { name: 'Instagram', url: 'https://www.instagram.com/', icon: `${instagram}` },
    { name: 'twitter',   url: 'https://x.com/',             icon: `${twitter}` },
  ]

  constructor() {
    super()
  }

  connectedCallback() {
    const footer = document.createElement('footer')
    const footerLogo = document.createElement('img')
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
        link.classList.add('external-link')

        item.appendChild(link)
        list.appendChild(item)
      })

      mainWrapper.appendChild(list)
    });

    mainWrapper.classList.add('main-wrapper')

    footerLogo.src = `${logo}`

    this.social.forEach(({ name, url, icon }) => {
      const link = document.createElement('a')
      const linkIcon = document.createElement('img')

      link.href = url

      linkIcon.src = icon
      linkIcon.alt = name

      link.appendChild(linkIcon)
      linksWrapper.appendChild(link)
    })

    linksWrapper.classList.add('links-wrapper')

    bottomWrapper.classList.add('bottom-wrapper')
    bottomWrapper.appendChild(footerLogo)
    bottomWrapper.appendChild(linksWrapper)

    footer.appendChild(mainWrapper)
    footer.appendChild(mainWrapper)
    footer.appendChild(bottomWrapper)

    this.appendChild(footer)
  }
}

customElements.define('fi-footer', Footer);