import shadow from './main.js'

const btnLandingContact = shadow.querySelector('fi-main-button.landing-contact button')
btnLandingContact.addEventListener('click', () => window.location.href = '/contact')