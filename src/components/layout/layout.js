class Layout extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const fiHeader = document.createElement('fi-header')
    const main = document.createElement('main')
    const slot = document.createElement('slot')

    main.appendChild(slot)
    
    this.appendChild(fiHeader)
    this.appendChild(main)
    
    // this.shadowRoot.innerHTML = `
    //   <div class="container">
    //     <fi-header></fi-header>
    //     ¡Hola, usuario <slot>desconocido</slot>!
    //   </div>
    // `
  }
}

customElements.define('fi-layout', Layout)