<template>
  <div>
    <Menu />
    <Nuxt />
  </div>
</template>

<script>
export default {
  watch: {
    $route(to, from) {
      this.closeMenu()
    }
  },

  methods: {
    closeMenu() {
      this.$store.commit('toggleMenu', false)
    }
  }
}
</script>
