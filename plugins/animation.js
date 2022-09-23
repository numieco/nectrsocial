import Vue from 'vue'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import dragscroll from 'dragscroll'
import Animations from '../js'

gsap.registerPlugin(ScrollToPlugin)

Vue.prototype.$pageAnimation = Animations
Vue.prototype.$gsap = gsap
Vue.prototype.$dragscroll = dragscroll

Vue.prototype.$banner = (_scroller) => {
  const mql = window.matchMedia('(max-width: 767px)')
  function mqlBanner(e) {
    if (e.matches) {
      const tl = gsap.timeline()
      tl.to('.c-scrolling-tape__inner.one', {
        scrollTrigger: {
          scroller: _scroller,
          start: 'top 90%',
          trigger: '.banner-section',
          scrub: 2.5
        },
        xPercent: -35,
        ease: 'none'
      })
      tl.from('.c-scrolling-tape__inner.two', {
        scrollTrigger: {
          scroller: _scroller,
          start: 'top 90%',
          trigger: '.banner-section',
          scrub: 2.5
        },
        xPercent: -35,
        ease: 'none'
      })
    } else {
      const tl = gsap.timeline()
      tl.to('.c-scrolling-tape__inner.one', {
        scrollTrigger: {
          scroller: _scroller,
          start: 'top 90%',
          trigger: '.banner-section',
          scrub: 2.5
        },
        xPercent: -50,
        ease: 'none'
      })
      tl.from('.c-scrolling-tape__inner.two', {
        scrollTrigger: {
          scroller: _scroller,
          start: 'top 90%',
          trigger: '.banner-section',
          scrub: 2.5
        },
        xPercent: -50,
        ease: 'none'
      })
    }
  }
  mql.addListener(mqlBanner)
  mqlBanner(mql)
}

Vue.prototype.$scrollingLogos = () => {
  const mql = window.matchMedia('(max-width: 767px)')
  function mqlLogos(e) {
    if (e.matches) {
      const wrapper = document.querySelector('.c-showcase-grid__item')
      const wrapperHeight = wrapper.scrollHeight
      const tl = gsap.timeline()
      tl.to('.c-showcase-grid__item.normal', {
        y: -wrapperHeight - 24,
        duration: 45,
        repeat: -1,
        ease: 'none'
      })
      tl.from(
        '.c-showcase-grid__item.invert',
        {
          y: -wrapperHeight - 230,
          duration: 40,
          repeat: -1,
          ease: 'none'
        },
        '<'
      )
    } else {
      const grids = document.querySelectorAll('.c-showcase__wrapper')
      const wrapper = document.querySelector('.c-showcase-grid__item')
      const wrapperHeight = wrapper.scrollHeight
      const tl = gsap.timeline()
      tl.to('.c-showcase-grid__item.normal', {
        y: -wrapperHeight - 44,
        duration: 45,
        repeat: -1,
        ease: 'none'
      })
      tl.from(
        '.c-showcase-grid__item.invert',
        {
          y: -wrapperHeight - 390,
          duration: 40,
          repeat: -1,
          ease: 'none'
        },
        '<'
      )
      grids.forEach((grid) => {
        grid.addEventListener('mouseover', function () {
          tl.pause()
        })
        grid.addEventListener('mouseleave', function () {
          tl.play()
        })
      })
    }
  }
  mql.addListener(mqlLogos)
  mqlLogos(mql)
}

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

Vue.prototype.$autoScroll = (el) => {
  const mql = window.matchMedia('(max-width: 767px)')
  const tl = gsap.timeline()
  function mqlScroll(e) {
    if (e.matches) {
      tl.to(el, {
        duration: 20,
        scrollTo: {
          x: 'max'
        },
        ease: 'none'
      })
      tl.to(
        el,
        {
          duration: 20,
          scrollTo: {
            x: 0
          },
          ease: 'none'
        },
        '>'
      )
      tl.play()
      tl.repeat(-1)
    } else {
      tl.seek(0)
      tl.pause()
    }
  }
  mql.addListener(mqlScroll)
  mqlScroll(mql)
}
