class GhostButton extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const availableSizes = ['small', 'medium', 'large']
    
    const label = this.getAttribute('label')
    const size = this.getAttribute('size')

    const button = document.createElement('button')
    
    button.textContent = label || ''
    button.classList.add('ghost-button')
    
    if (availableSizes.includes(size)) button.classList.add(size)
    
    this.appendChild(button)
  }
}

customElements.define('fi-ghost-button', GhostButton)