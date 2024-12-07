const body = document.querySelector('body')
const shadow = body.shadowRoot || body.attachShadow({ mode: 'open' })

export default shadow