class Layout extends HTMLElement {
  constructor() {
    super()
  }
  
  connectedCallback() {
    const styles = this.getAttribute('styles')

    if (!styles) return;

    this.attachShadow({ mode: 'open' })

    const link = document.createElement('link')
    const fiHeader = document.createElement('fi-header')
    const main = document.createElement('main')
    const slot = document.createElement('slot')
    const fiFooter = document.createElement('fi-footer')

    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('href', styles)
    
    main.appendChild(slot)
    
    this.shadowRoot.appendChild(link)
    this.shadowRoot.appendChild(fiHeader)
    this.shadowRoot.appendChild(main)
    this.shadowRoot.appendChild(fiFooter)
  }
}

customElements.define('fi-layout', Layout)