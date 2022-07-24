<template>
  <div class="c-nav" :class="isInverted ? 'inverted' : ''">
    <nuxt-link aria-current="page" class="c-nav__link" to="/">
      <img
        v-if="isInverted"
        class="c-nav__logo"
        src="/assets/images/Logo---New---Black.svg"/>
      <img v-else class="c-nav__logo" src="/assets/images/Logo---New.svg" />
    </nuxt-link>
    <div
      class="c-nav__btn"
      :class="isInverted ? 'inverted' : ''"
      @click="toggleMenu()">
      <h6>Menu</h6>
      <div class="c-nav__hamburger">
        <div class="hamburger-line" :class="isInverted ? 'inverted' : ''"></div>
        <div
          class="hamburger-line mid-line"
          :class="isInverted ? 'inverted' : ''"></div>
        <div class="hamburger-line" :class="isInverted ? 'inverted' : ''"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isInverted: Boolean
  },

  methods: {
    toggleMenu() {
      this.$store.commit('toggleMenu', (this.menuOpen = !this.menuOpen))
    }
  }
}
</script>
