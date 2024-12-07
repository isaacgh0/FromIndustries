class Layout extends HTMLElement {
  constructor() {
    super()
  }
  
  connectedCallback() {
    const stylesheet = document.querySelector('link[rel="stylesheet"]')

    if (!stylesheet) return;

    this.attachShadow({ mode: 'open' })

    const link = document.createElement('link')
    const fiHeader = document.createElement('fi-header')
    const main = document.createElement('main')
    const slot = document.createElement('slot')
    const fiFooter = document.createElement('fi-footer')
    const stylesRef = stylesheet.getAttribute('href')

    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('href', stylesRef)
    
    main.appendChild(slot)
    
    this.shadowRoot.appendChild(link)
    this.shadowRoot.appendChild(fiHeader)
    this.shadowRoot.appendChild(main)
    this.shadowRoot.appendChild(fiFooter)
  }
}

customElements.define('fi-layout', Layout)