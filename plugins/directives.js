import Vue from 'vue'
import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import Splitting from 'splitting'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
