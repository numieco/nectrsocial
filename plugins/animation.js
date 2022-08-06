import Vue from 'vue'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import Animations from '../js'

gsap.registerPlugin(ScrollToPlugin)

Vue.prototype.$pageAnimation = Animations
Vue.prototype.$gsap = gsap

Vue.prototype.$slideRight = (el, width) => {
  gsap.to(el, {
    duration: 0.75,
    scrollTo: {
      x: el.scrollLeft + width
    },
    ease: 'power2.inOut'
  })
}

Vue.prototype.$slideLeft = (el, width) => {
  gsap.to(el, {
    duration: 0.75,
    scrollTo: {
      x: el.scrollLeft - width
    },
    ease: 'power2.inOut'
  })
}
