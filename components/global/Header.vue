<template>
  <div class="c-nav">
    <nuxt-link aria-current="page" class="c-nav__link" to="/">
      <img
        v-if="mutableInvert && !blueBg"
        class="c-nav__logo"
        src="/assets/images/Logo---New---Black.svg"/>
      <img v-else class="c-nav__logo" src="/assets/images/Logo---New.svg" />
    </nuxt-link>
    <div
      class="c-nav__btn"
      :class="mutableInvert && !blueBg ? 'inverted' : ''"
      @click="toggleMenu()">
      <h6>{{ menuOpen ? 'Close' : 'Menu' }}</h6>
      <div class="c-nav__hamburger" :class="menuOpen ? 'open' : ''">
        <div
          class="hamburger-line top-line"
          :class="mutableInvert && !blueBg ? 'inverted' : ''"></div>
        <div
          class="hamburger-line mid-line"
          :class="mutableInvert && !blueBg ? 'inverted' : ''"></div>
        <div
          class="hamburger-line bottom-line"
          :class="mutableInvert && !blueBg ? 'inverted' : ''"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isInverted: Boolean,
    blueBg: Boolean
  },

  data() {
    return {
      mutableInvert: this.isInverted
    }
  },

  computed: {
    menuOpen() {
      return this.$store.getters.menuState
    }
  },

  methods: {
    toggleMenu() {
      this.mutableInvert = !this.mutableInvert
      this.$store.commit('toggleMenu', (this.menuOpen = !this.menuOpen))
    }
  }
}
</script>

<style scoped>
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
