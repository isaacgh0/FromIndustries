class ContentCard extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const validThemes = ['primary', 'secondary']

    const theme = this.getAttribute('theme') || 'primary'
    const container = document.createElement('div')
    const bottomWrapper = document.createElement('div')
    
    this.setImage(container)
    this.setText(bottomWrapper)
    this.setActions(bottomWrapper)

    bottomWrapper.classList.add('bottom-wrapper')

    container.classList.add('content-card')
    container.classList.add('wrapper')
    container.appendChild(bottomWrapper)
    validThemes.includes(theme) && container.classList.add(theme)

    this.appendChild(container)
  }

  setImage(wrapper) {
    const imgWrapper = document.createElement('div')
    const imgSrc = this.getAttribute('imgSrc')
    const name = this.getAttribute('name')

    if (!imgSrc) return

    const image = document.createElement('img')

    image.src = imgSrc
    image.alt = name || ''

    imgWrapper.classList.add('img-wrapper')
    imgWrapper.appendChild(image)

    wrapper.appendChild(imgWrapper)
  }

  setText(wrapper) {
    const header = this.getAttribute('header')
    const text = this.getAttribute('text')

    if (!header) return

    const head = document.createElement('h6')
    const body = document.createElement('p')

    head.innerText = header
    body.innerText = text || ''

    wrapper.appendChild(head)
    text && wrapper.appendChild(body)
  }

  setActions(wrapper) {
    const validThemes = ['primary', 'secondary']

    const primary = this.getAttribute('primary')
    const secondary = this.getAttribute('secondary')
    const theme = this.getAttribute('theme') || 'primary'

    const actionWrapper = document.createElement('div')
    const btnSecondary = document.createElement('fi-ghost-button')
    const btnPrimary = document.createElement('fi-main-button')

    btnSecondary.setAttribute('label', secondary)
    btnSecondary.setAttribute('size', 'medium')
    btnSecondary.setAttribute('theme', validThemes.includes(theme) ? theme : 'primary')

    btnPrimary.setAttribute('label', primary)
    btnPrimary.setAttribute('size', 'medium')
    btnPrimary.setAttribute('theme', validThemes.includes(theme) ? theme : 'primary')
    
    primary && actionWrapper.appendChild(btnPrimary)
    secondary && actionWrapper.appendChild(btnSecondary)

    actionWrapper.classList.add('action-wrapper')
    if (primary || secondary) wrapper.appendChild(actionWrapper)
  }
}

customElements.define('fi-content-card', ContentCard)