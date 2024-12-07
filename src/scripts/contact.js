import shadow from './shadow'
import gmail from '../assets/icons/gmail.svg'
import phone from '../assets/icons/phone.svg'
import whatsapp from '../assets/icons/whatsapp.svg'

export const initContactContent = () => {
  const contact = [
    {
      icon: phone,
      href: 'tel:+5217711154064',
      text: '771 115 4064',
    },
    {
      icon: gmail,
      href: 'mailto:contacto@fromindustries.com',
      text: 'contato@fromindustries.com',
    },
    {
      icon: whatsapp,
      href: 'https://api.whatsapp.com/send?phone=7711154064&text=Me%20gustaría%20saber%20más%20sobre%20sus%20servicios',
      text: 'Escribir por WhatsApp',
    },
  ]
  const page = shadow.querySelector('fi-page[content="contact"]')
  const alternativeWrapper = page.querySelector('div.alternatives')
  const contactWrapper = document.createElement('div')

  contact.forEach(item => {
    const icon = document.createElement('img')
    const text = document.createElement('span')
    const link = document.createElement('a')

    icon.src = item.icon
    text.textContent = item.text
    link.href = item.href

    link.appendChild(icon)
    link.appendChild(text)
    contactWrapper.appendChild(link)
  })

  contactWrapper.classList.add('contact')
  alternativeWrapper.appendChild(contactWrapper)
}