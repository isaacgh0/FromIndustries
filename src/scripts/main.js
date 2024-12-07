import { pageRedirect } from './functions'
import shadow from './shadow'

const template = document.querySelector('template')
shadow.appendChild(template.content.cloneNode(true))

const layout = shadow.querySelector('fi-layout')  
const links = layout.shadowRoot.querySelectorAll('a:not(.external-link)')


links.length && links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()
    pageRedirect((new URL(e.target.href)).pathname)
  })
})

window.addEventListener('popstate', () => pageRedirect())