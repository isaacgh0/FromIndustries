class ListHighlighter extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const words = this.getAttribute('words')
    if (!words) return

    const wordsArray = words.split(',')
    const list = document.createElement('ul')

    wordsArray.forEach((word, index) => {
      const li = document.createElement('li')

      li.style.animationDelay = `${index * 0.12}s`
      li.textContent = word
      list.appendChild(li)
    })

    list.classList.add('list-highlighter')
    this.appendChild(list)
  }
}

customElements.define('fi-list-highlighter', ListHighlighter)