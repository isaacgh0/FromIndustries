import check from '../../assets/icons/check-circle.svg'
import info from '../../assets/icons/info-circle.svg'
import error from '../../assets/icons/error.svg'

class BlockMessage extends HTMLElement {
  icons = {
    info:    info,
    danger:  error,
    success: check,
  }

  constructor() {
    super()
  }

  connectedCallback() {
    const severity = this.getAttribute('severity')
    const message = this.getAttribute('message')
    const vaidSeverities = ['info', 'danger', 'success']
    
    if (!vaidSeverities.includes(severity)) return
    
    const wrapper = document.createElement('div')
    const img = document.createElement('img')
    const text = document.createElement('p')
    const line = document.createElement('div')
    const icon = this.icons[severity]

    img.src = `${icon}`
    text.innerText = message

    wrapper.appendChild(img)
    wrapper.appendChild(text)
    wrapper.appendChild(line)
    wrapper.classList.add('block-message')
    wrapper.classList.add(`message-${severity}`)

    this.appendChild(wrapper)
  }
}

customElements.define('fi-block-message', BlockMessage)