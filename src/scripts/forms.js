const contactForm = {
  values: {
    name:    '',
    email:   '',
    busines: '',
    message: '',
  },
  validator: {
    name:    /^[\p{L}\s]*$/u,
    email:   /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    message: /^.{1,300}$/,
  }
}

export const forms = {
  contact: contactForm,
}