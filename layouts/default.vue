<template>
  <div>
    <transition :css="false" @before-enter="beforeEnter" @enter="enter">
      <Menu v-if="menuOpen" />
    </transition>
    <Nuxt />
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  computed: {
    menuOpen() {
      return this.$store.getters.menuState
    }
  },

  watch: {
    $route(to, from) {
      this.closeMenu()
    }
  },

  methods: {
    beforeEnter(el) {
      gsap.set(el, {
        autoAlpha: 0
      })
    },

    enter(el, done) {
      gsap.to(el, {
        autoAlpha: 1,
        ease: 'power1.easeIn'
      })
      gsap.to(
        '.c-menu__link',
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.1
        },
        '<+0.1'
      )
      gsap.to(
        '.c-menu__sub-link',
        {
          duration: 0.75,
          y: 0,
          autoAlpha: 1
        },
        '<+0.75'
      )
      gsap.to(
        '.c-menu__social-link',
        {
          ease: 'power1',
          autoAlpha: 1,
          stagger: 0.15,
          onComplete: done
        },
        '<+0.3'
      )
    },

    // leave(el, done) {
    //   gsap.to('.c-menu__link', {
    //     y: 15,
    //     autoAlpha: 0,
    //     stagger: 0.1
    //   })

    //   gsap.to(
    //     el,
    //     {
    //       autoAlpha: 0,
    //       onComplete: done
    //     },
    //     '<+0.45'
    //   )
    // },

    closeMenu() {
      this.$store.commit('toggleMenu', false)
    }
  }
}
</script>
