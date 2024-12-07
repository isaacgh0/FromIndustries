import { initIndexContent } from '../../scripts'
import { initContactContent } from '../../scripts/contact'

class DynamicContentLoader extends HTMLElement {
  stylesheet = null
  pages = []
  links = {
    '/':          { content: 'index',   script: initIndexContent },
    '/productos': { content: 'products'},
    '/nosotros':  { content: 'about' },
    '/contacto':  { content: 'contact', script: initContactContent },
  }

  constructor() {
    super()
  }

  connectedCallback() {
    this.pages = [...this.querySelectorAll('fi-page')]
    this.stylesheet = document.querySelector('link[rel="stylesheet"]')

    this.stylesheet && this.insertBefore(this.stylesheet.cloneNode(), this.firstChild)

    document.addEventListener('DOMContentLoaded', () => this.dynamicRoutes())
  }

  dynamicRoutes() {
    const url = new URL(window.location.href)
    const path = url.pathname
    const link = this.links[path]
    const activePage = this.pages.find(page => page.isContentLoaded)

    let nextPage = null
    
    activePage && activePage.clear()

    if (!link) return

    nextPage = this.pages.find(page => page.getAttribute('content') === link.content)

    nextPage && nextPage.contentLoad()
    'script' in link && link.script()
  }
}

customElements.define('fi-dynamic-content-loader', DynamicContentLoader)