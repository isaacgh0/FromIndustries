class Page extends HTMLElement {
  template = null
  wrapper = null
  isContentLoaded = false

  constructor() {
    super()
  }

  connectedCallback() {
    this.wrapper = document.createElement('div')
    this.wrapper.classList.add('page')
    this.template = this.querySelector('template')

    this.appendChild(this.wrapper)
  }

  contentLoad() {
    this.wrapper.appendChild(this.template.content.cloneNode(true))
    this.isContentLoaded = true
  }

  clear() {
    this.wrapper.innerHTML = ''
    this.isContentLoaded = false
  }
}

customElements.define('fi-page', Page)