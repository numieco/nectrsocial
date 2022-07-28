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
      <h6>Menu</h6>
      <div class="c-nav__hamburger">
        <div
          class="hamburger-line"
          :class="mutableInvert && !blueBg ? 'inverted' : ''"></div>
        <div
          class="hamburger-line mid-line"
          :class="mutableInvert && !blueBg ? 'inverted' : ''"></div>
        <div
          class="hamburger-line"
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

  methods: {
    toggleMenu() {
      this.mutableInvert = !this.mutableInvert
      this.$store.commit('toggleMenu', (this.menuOpen = !this.menuOpen))
    }
  }
}
</script>
