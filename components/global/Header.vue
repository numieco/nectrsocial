<template>
  <div class="c-nav">
    <div
      ref="navBg"
      class="c-nav__bg"
      :class="[
        mutableInvert && !blueBg ? 'inverted' : '',
        menuOpen || isHomePage ? 'hide' : '',
      ]"></div>
    <nuxt-link aria-current="page" class="c-nav__link" to="/">
      <img
        class="c-nav__logo absolute"
        src="/assets/images/Logo---New---Black.svg" />
      <img
        v-if="mutableInvert && !blueBg"
        class="c-nav__logo normal"
        src="/assets/images/Logo---New---Black.svg" />
      <img
        v-else-if="isHomePage && !menuOpen && !isMobile"
        class="c-nav__logo normal"
        src="/assets/images/Logo---New.svg" />
      <img
        v-else
        class="c-nav__logo normal"
        src="/assets/images/Logo---New.svg" />
    </nuxt-link>
    <div
      class="c-nav__btn"
      :class="[
        mutableInvert && !blueBg ? 'inverted' : '',
        isHomePage && !menuOpen && !isMobile ? 'inverted' : '',
      ]"
      @click="toggleMenu()">
      <h6>{{ menuOpen ? 'Close' : 'Menu' }}</h6>
      <div class="c-nav__hamburger" :class="menuOpen ? 'open' : ''">
        <div
          class="hamburger-line top-line"
          :class="[
            mutableInvert && !blueBg ? 'inverted' : '',
            isHomePage && !menuOpen && !isMobile ? 'inverted' : '',
          ]"></div>
        <div
          class="hamburger-line mid-line"
          :class="[
            mutableInvert && !blueBg ? 'inverted' : '',
            isHomePage && !menuOpen && !isMobile ? 'inverted' : '',
          ]"></div>
        <div
          class="hamburger-line bottom-line"
          :class="[
            mutableInvert && !blueBg ? 'inverted' : '',
            isHomePage && !menuOpen && !isMobile ? 'inverted' : '',
          ]"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isInverted: Boolean,
    blueBg: Boolean,
  },

  data() {
    return {
      mutableInvert: this.isInverted,
      isMobile: false,
      scrollAnimation: null,
    }
  },

  computed: {
    menuOpen() {
      return this.$store.getters.menuState
    },

    isHomePage() {
      return this.$route.name === 'index'
    },
  },

  mounted() {
    this.checkMobile()
    window.addEventListener('resize', this.checkMobile)

    if (this.isHomePage) {
      setTimeout(() => {
        this.initScrollTrigger()
      }, 2000)
    }
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.checkMobile)
    if (this.scrollAnimation) {
      this.scrollAnimation.kill()
    }
  },

  methods: {
    initScrollTrigger() {
      const tl = this.$gsap.timeline({
        scrollTrigger: {
          scroller: this.isMobile ? '' : '.scroller',
          trigger: '.l-section.banner-section',
          start: 'top top',
          end: 'top -10',
          scrub: true,
        },
      })

      tl.to(this.$refs.navBg, {
        opacity: 1,
        duration: 1,
      })
        .to(
          '.hamburger-line',
          {
            backgroundColor: '#FFFFFF',
            duration: 1,
          },
          '<'
        )
        .to(
          '.c-nav__btn',
          {
            color: '#FFFFFF',
            duration: 1,
          },
          '<'
        )

      this.scrollAnimation = tl
    },

    toggleMenu() {
      this.mutableInvert = !this.mutableInvert
      this.$store.commit('toggleMenu', !this.menuOpen)
    },

    checkMobile() {
      this.isMobile = window.innerWidth <= 768
    },
  },
}
</script>

<style scoped>
.c-nav {
  position: fixed;
  z-index: 100;
}
.c-nav__bg {
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: auto;
  width: 100%;
  height: 80px;
  background-color: #0a151f;
  transition: opacity 0.3s linear;
}

.c-nav__bg.hide {
  opacity: 0;
}

.c-nav__bg.inverted {
  background-color: white;
}

@media screen and (max-width: 991px) {
  .c-nav__bg {
    height: 102px;
  }
}
@media screen and (max-width: 767px) {
  .c-nav__bg {
    height: 88px;
  }
}
@media screen and (max-width: 479px) {
  .c-nav__bg {
    height: 78px;
  }
}

.c-nav__link {
  position: relative;
}
.c-nav__logo.absolute {
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.c-nav__hamburger {
  transition-property: margin-left;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;
}
.c-nav__hamburger.open {
  margin-left: 15px;
}
.c-nav__hamburger.open > .hamburger-line.top-line {
  transform: translate(0px, 9px) rotate(45deg);
}
.c-nav__hamburger.open > .hamburger-line.bottom-line {
  transform: translate(0px, -9px) rotate(-45deg);
}
.c-nav__hamburger.open > .hamburger-line.mid-line {
  opacity: 0;
  transform: translate(-100%, 0px);
}
.hamburger-line {
  transition-property: transform, opacity;
  transition-duration: 350ms, 350ms;
  transition-timing-function: ease, ease;
}
</style>
