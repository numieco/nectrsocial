import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default () => {
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector('.scroller'),
    smooth: true
  })

  return locoScroll
}
