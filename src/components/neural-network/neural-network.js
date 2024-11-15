class Circle {
  canvas = undefined
  ctx = undefined
  
  x = 0
  y = 0
  color = ''
  radius = 0
  speed = 0
  directionAngle = 0
  vector = { }

  constructor({ canvas = undefined, ctx = undefined } = {}) {
    this.canvas = canvas
    this.ctx = ctx

    if (!this.canvas || !this.ctx) return

    this.init()
  }

  init() {
    this.x = Math.random() * this.canvas.width
    this.y = Math.random() * this.canvas.height
    this.color = '#221F20'
    this.radius = 1.8 * Math.random() * 2.5
    this.speed = 10 * Math.random() * 10
    this.directionAngle = Math.floor(Math.random() * 360)
    this.vector = {
      x: Math.cos(this.directionAngle) * this.speed,
      y: Math.sin(this.directionAngle) * this.speed,
    }
    
    setTimeout(() => {
      this.speed = 1.2 * Math.random() * 0.8
      this.vector = {
        x: Math.cos(this.directionAngle) * this.speed,
        y: Math.sin(this.directionAngle) * this.speed,
      }
    }, 200)
  }

  update() {
    if (!this.canvas) return
    
    if (this.x >= this.canvas.width || this.x <= 0) {
      this.vector.x *= -1
    }

    if (this.y >= this.canvas.height || this.y <= 0) {
      this.vector.y *= -1
    }

    if (this.x > this.canvas.width) this.x = this.canvas.width
    if (this.y > this.canvas.height) this.y = this.canvas.height

    if (this.x < 0) this.x = 0
    if (this.y < 0) this.y = 0

    this.x += this.vector.x
    this.y += this.vector.y
  }

  draw() {
    if (!this.ctx) return

    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    this.ctx.closePath()
    this.ctx.fillStyle = this.color
    this.ctx.fill()
  }
}

class NeuralNetwork extends HTMLElement {
  PARTICLES_LENGTH = 90
  LINK_RADIUS = 80
  LINE_COLOR = '#221F20'

  canvas = null
  ctx = null
  circles = []
  loopId = null
  id = 0

  constructor() {
    super()
  }

  connectedCallback() {
    this.canvas = document.createElement('canvas')

    this.canvas.classList.add('neural-network')

    this.init()
    this.startAnimation()

    this.appendChild(this.canvas)
  }

  init() {
    if (!this.canvas) return

    this.ctx = this.canvas.getContext('2d')

    for (let i = 0; i < this.PARTICLES_LENGTH; i++) {
      this.circles.push(new Circle({ canvas: this.canvas, ctx: this.ctx }))
    }
  }

  startAnimation() {
    this.loopId = requestAnimationFrame(() => this.animationLoop())
  }

  animationLoop() {
    if (!this.ctx) return

    const { width, height } = this.getBoundingClientRect()

    this.canvas.width = width
    this.canvas.height = height

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    this.drawScene()

    this.id = requestAnimationFrame(() => this.animationLoop())
  }

  drawScene() {
    this.drawParticle()
    this.drawLine()
  }

  drawLine() {
    for(let i = 0; i < this.circles.length; i++) {
      this.linkPoints(this.circles[i], this.circles)
    }
  }

  linkPoints(point, hubs) {
    for (let i = 0; i < hubs.length; i++) {
      const distance = this.checkDistance(point.x, point.y, hubs[i].x, hubs[i].y)
      const opacity = 1 - distance / this.LINK_RADIUS

      if (opacity > 0) {
        this.ctx.lineWidth = 0.8 * Math.random() * 1.2
        this.ctx.strokeStyle = this.LINE_COLOR

        this.ctx.beginPath()
        this.ctx.moveTo(point.x, point.y)
        this.ctx.lineTo(hubs[i].x, hubs[i].y)
        this.ctx.closePath()
        this.ctx.stroke()
      }
    }
  }

  checkDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
  }

  drawParticle() {
    for (let i = 0; i < this.circles.length; i++) {
      this.circles[i].update()
      this.circles[i].draw()
    }
  }
}

customElements.define('fi-neural-network', NeuralNetwork)