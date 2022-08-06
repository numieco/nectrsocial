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
    this.createAnimations()
    this.banner()
    this.footer()
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

    const that = this

    ScrollTrigger.scrollerProxy(this.element, {
      scrollTop(value) {
        return arguments.length
          ? this.locoScroll.scrollTo(value, 0, 0)
          : that.locoScroll.scroll.instance.scroll.y
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        }
      }
    })

    this.locoScroll.on('scroll', function () {
      ScrollTrigger.update()
    })

    // ScrollTrigger.addEventListener('refresh', () => this.locoScroll.update())

    ScrollTrigger.refresh()
  }

  createAnimations() {
    this.elements.paragraphs &&
      this.elements.paragraphs.forEach((element) => {
        return new Paragraph({ element })
      })
  }

  banner() {
    const tl = gsap.timeline()
    tl.to('.c-scrolling-tape__inner.one', {
      scrollTrigger: {
        scroller: this.element,
        start: 'top 90%',
        trigger: '.banner-section',
        scrub: 2.5
      },
      xPercent: -80,
      ease: 'none'
    })
    tl.from('.c-scrolling-tape__inner.two', {
      scrollTrigger: {
        scroller: this.element,
        start: 'top 90%',
        trigger: '.banner-section',
        scrub: 2.5
      },
      xPercent: -80,
      ease: 'none'
    })
  }

  footer() {
    const tape = document.querySelector('.footer-tape')
    const tapeWidth = tape.scrollWidth
    const tl = gsap.timeline()
    tl.to('.footer-tape', {
      x: -tapeWidth,
      duration: 30,
      repeat: -1,
      ease: 'none'
    })
  }
}
