import Vue from 'vue'
import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import Splitting from 'splitting'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import locomotiveScroll from './smoothscroll'

gsap.registerPlugin(ScrollTrigger)

const locoScroll = locomotiveScroll()
const pageContainer = document.querySelector('.scroller')

ScrollTrigger.scrollerProxy(pageContainer, {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    }
  },
  pinType: pageContainer.style.transform ? 'transform' : 'fixed'
})

locoScroll.on('scroll', ScrollTrigger.update)

Vue.directive('textReveal', {
  bind(el) {
    const results = Splitting({
      target: el,
      by: 'lines'
    })

    results.forEach((result) => {
      result.lines.forEach((line, lineIndex) => {
        line.forEach((word, wordIndex) => {
          gsap.from(word, {
            scrollTrigger: {
              scroller: locoScroll.el,
              trigger: result.el
            },
            autoAlpha: 0,
            y: 15,
            stagger: 0.5,
            delay: lineIndex * 0.2 + wordIndex * 0.02 + 0.5
          })
        })
      })
    })
  }
})
