import shadow from './shadow'

export const pageRedirect = path => {
  const layout = shadow.querySelector('fi-layout')
  const header = layout.shadowRoot.querySelector('fi-header')
  const loader = shadow.querySelector('fi-dynamic-content-loader')

  path && window.history.pushState({}, '', path)
  header && header.reload()
  loader && loader.dynamicRoutes()
}