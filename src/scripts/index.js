import { pageRedirect } from './functions'
import shadow from './shadow'

export const initIndexContent = () => {
  const cards = [
    {
      header: 'Desarrollo de software',
      text:   'Desarrollamos aplicaciones web y soluciones generales de software a la medida, funcionales y que se ajusten a tu lógica de negocio.',
      imgSrc: 'https://fromindustries.sirv.com/Images/fi-landing-development.webp',
      name:   'development'
    },
    {
      header: 'Administración de redes',
      text:   'Diseñamos, implementamos y administramos redes de computadoras, para que tu empresa cuente con una infraestructura de comunicación segura y eficiente.',
      imgSrc: 'https://fromindustries.sirv.com/Images/fi-landing-network.webp',
      name:   'network'
    },
    {
      header: 'Asesoria y mantenimiento de hardware',
      text:   'Ofrecemos asesoría y mantenimiento de hardware, para que tu empresa cuente con equipos de cómputo en óptimas condiciones.',
      imgSrc: 'https://fromindustries.sirv.com/Images/fi-landing-hardware.webp',
      name:   'hardware'
    },
    {
      header: 'Instalación de camaras de seguridad',
      text:   'Instalamos cámaras de seguridad y sistemas de monitoreo, para que tu empresa cuente con un sistema de vigilancia eficiente.',
      imgSrc: 'https://fromindustries.sirv.com/Images/fi-landing-camera.webp',
      name:   'camera'
    },
    {
      header: 'Soporte remoto',
      text:   'Ofrecemos soporte remoto para que tu empresa cuente con asistencia técnica inmediata y eficiente.',
      imgSrc: 'https://fromindustries.sirv.com/Images/fi-landing-support.webp',
      name:   'support'
    }
  ]
  
  const page = shadow.querySelector('fi-page[content="index"]')
  const btnLandingContact = page.querySelector('fi-main-button.landing-contact button')
  const btnLandingProducts = page.querySelector('fi-ghost-button.landing-products button')
  const businessActivity = page.querySelector('section.business-activity')
  
  btnLandingContact.addEventListener('click', () => pageRedirect('/contacto'))
  btnLandingProducts.addEventListener('click', () => pageRedirect('/productos'))
  
  cards.forEach(card => {
    const wrapper = document.createElement('div')
    const contentCard = document.createElement('fi-content-card')
    
    contentCard.setAttribute('header', card.header)
    contentCard.setAttribute('text', card.text)
    contentCard.setAttribute('imgSrc', card.imgSrc)
    contentCard.setAttribute('name', card.name)
  
    wrapper.appendChild(contentCard)
    businessActivity.appendChild(wrapper)
  })
}