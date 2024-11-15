class GhostButton extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const validThemes = ['primary', 'secondary', 'tertiary', 'info', 'danger', 'success']
    const availableSizes = ['small', 'medium', 'large']
    
    const label = this.getAttribute('label')
    const size = this.getAttribute('size')
    const theme = this.getAttribute('theme')

    const button = document.createElement('button')
    
    button.textContent = label || ''
    button.classList.add('ghost-button')
    validThemes.includes(theme) && button.classList.add(theme)
    
    if (availableSizes.includes(size)) button.classList.add(size)
    
    this.appendChild(button)
  }
}

customElements.define('fi-ghost-button', GhostButton)