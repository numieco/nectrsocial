import Vue from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Splitting from 'splitting'
import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'

gsap.registerPlugin(ScrollTrigger)
Vue.prototype.$splittext = Splitting

Vue.prototype.$paragraph = () => {
  const texts = document.querySelectorAll('[data-paragraph]')
  const paragraphs = Splitting({ target: texts, by: 'lines' })
  paragraphs.forEach((paragraph) => {
    paragraph.lines.forEach((line, lineIndex) => {
      line.forEach((word, wordIndex) => {
        gsap.set(texts, {
          opacity: 1,
        })

        gsap.from(
          word,
          {
            scrollTrigger: {
              trigger: paragraph.el,
              scroller: '.scroller',
            },
            autoAlpha: 0,
            y: 20,
            delay: lineIndex * 0.2 + wordIndex * 0.02 + 0.5,
          },
          '>'
        )

        gsap.utils.toArray('.list-point').forEach((bullet) => {
          gsap.to(bullet, {
            scrollTrigger: {
              scroller: '.scroller',
              trigger: bullet,
            },
            opacity: 1,
          })
        })
      })
    })
  })
}
