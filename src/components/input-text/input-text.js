import { forms } from '../../scripts/forms'

class InputText extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const placeholder = this.getAttribute('placeholder')
    const field = this.getAttribute('field')
    const formName = this.getAttribute('form')
    const errorMessage = this.getAttribute('error')
    
    const formSelected = forms[formName]
    
    const input = document.createElement('input')
    const error = document.createElement('p')

    input.setAttribute('type', 'text')
    input.setAttribute('placeholder', placeholder)

    input.classList.add('input-text')

    input.addEventListener('input', (event) => {
      const regex = formSelected.validator[field]

      if (!regex) {
        formSelected.values[field] = event.target.value
        error.classList.add('active')
        return
      }

      regex.test(event.target.value)
        ? formSelected.values[field] = event.target.value
        : event.target.value = formSelected.values[field]
    })

    error.classList.add('error')
    error.textContent = errorMessage

    this.appendChild(input)

  }
}

customElements.define('fi-input-text', InputText)