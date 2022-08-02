import LocomotiveScroll from 'locomotive-scroll'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Component from './classes/Component'
import Paragraph from './animations/Paragraph'

gsap.registerPlugin(ScrollTrigger)

export default class extends Component {
  constructor(element) {
    super({
      element,
      elements: {
        paragraphs: '[data-paragraph]',
        scrollTo: '[data-go-to]'
      }
    })

    this.initScroll()
    this.createGoto()
    this.createAnimations()
    this.height = this.element.offsetHeight
  }

  initScroll() {
    this.locoScroll = new LocomotiveScroll({
      el: this.element,
      multiplier: 0.85,
      lerp: 0.09,
      smooth: true,
      tablet: {
        smooth: false
      },
      mobile: {
        smooth: false
      }
    })

    // this.locoScroll.on('scroll', ScrollTrigger.update)
    // ScrollTrigger.scrollerProxy(this.element, {
    //   scrollTop(value) {
    //     return arguments.length
    //       ? this.locoScroll.scrollTo(value, 0, 0)
    //       : this.locoScroll.scroll.instance.scroll.y
    //   },
    //   getBoundingClientRect() {
    //     return {
    //       top: 0,
    //       left: 0,
    //       width: window.innerWidth,
    //       height: window.innerHeight
    //     }
    //   }
    // })
    this.locoScroll.on('scroll', ({ scroll, direction }) => {
      const height = this.element.offsetHeight

      if (this.height !== height) {
        this.height = height
        this.updateScroll()
      }
    })
  }

  createGoto() {
    // console.log(this.elements.scrollTo)
    this.locoScroll.scrollTo(this.elements.scrollTo)
  }

  updateScroll() {
    // this.locoScroll.update()
  }

  createAnimations() {
    this.elements.paragraphs &&
      this.elements.paragraphs.forEach((element) => {
        return new Paragraph({ element })
      })
  }
}
