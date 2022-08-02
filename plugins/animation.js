import Vue from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Animations from '../js'

gsap.registerPlugin(ScrollTrigger)

Vue.prototype.$pageAnimation = Animations
Vue.prototype.$gsap = gsap

Vue.prototype.$scrollingBanner = (_scroller) => {
  const tl = gsap.timeline()
  tl.to('.c-scrolling-tape__inner', {
    scrollTrigger: {
      scroller: _scroller,
      // markers: true,
      start: 'top 80%',
      end: 'top -50%',
      trigger: '.banner-section',
      scrub: 1
    },
    xPercent: -80
  })
}
