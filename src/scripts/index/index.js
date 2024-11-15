import { shadow } from '../main'

const template = document.querySelector('template')

shadow.appendChild(template.content.cloneNode(true))