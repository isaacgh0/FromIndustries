const body = document.querySelector('body')
const shadow = body.attachShadow({ mode: 'open' })
const template = document.querySelector('template')

shadow.appendChild(template.content.cloneNode(true))

export default shadow