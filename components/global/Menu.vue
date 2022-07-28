<template>
  <div class="c-menu" :class="menuOpen ? 'is-open' : ''">
    <div class="c-menu__inner">
      <div class="c-menu__link-wrapper">
        <nuxt-link
          aria-current="page"
          class="c-menu__link w-inline-block w--current"
          to="/">
          <div>Home</div>
        </nuxt-link>
        <nuxt-link class="c-menu__link w-inline-block" to="/about">
          <div>About</div>
        </nuxt-link>
        <nuxt-link class="c-menu__link w-inline-block" to="/portfolio">
          <div>Portfolio</div>
        </nuxt-link>
        <nuxt-link class="c-menu__link w-inline-block" to="/capabilities">
          <div>Capabilities</div>
        </nuxt-link>
        <nuxt-link class="c-menu__link w-inline-block" to="/careers">
          <div>Careers</div>
        </nuxt-link>
      </div>
      <nuxt-link class="c-menu__sub-link w-inline-block" to="/network">
        <div>Nectr Network</div>
        <div class="menu-line"></div>
      </nuxt-link>
    </div>
    <div>
      <a class="c-menu__social-link w-inline-block" href="#">
        <img loading="lazy" src="/assets/images/facebook-icon.svg" />
      </a>
      <a class="c-menu__social-link w-inline-block" href="#">
        <img loading="lazy" src="/assets/images/linkedin-icon.svg" />
      </a>
      <a class="c-menu__social-link w-inline-block" href="#">
        <img loading="lazy" src="/assets/images/instagram-icon.svg" />
      </a>
    </div>
    <div class="c-menu-img__wrapper">
      <div class="c-menu__overlay"></div>
      <img
        class="c-menu__img one"
        loading="lazy"
        src="/assets/images/menu-img-1.jpg"/><img
        class="c-menu__img two"
        loading="lazy"
        src="/assets/images/menu-img-2.jpg"/><img
        class="c-menu__img three"
        loading="lazy"
        src="/assets/images/menu-img-3.jpg"/><img
        class="c-menu__img four"
        loading="lazy"
        src="/assets/images/menu-img-4.jpg"/><img
        class="c-menu__img five"
        loading="lazy"
        src="/assets/images/menu-img-2.jpg"/>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    menuOpen() {
      return this.$store.state.menuOpen
    }
  }
}
</script>

<style scoped>
.c-menu {
  pointer-events: none;
}
.c-menu.is-open {
  pointer-events: auto;
}
.c-menu__link {
  -webkit-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}
.c-menu__link:hover {
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1.25px;
  -webkit-text-stroke-color: white;
}
.c-menu__sub-link:hover > .menu-line {
  transform: translateX(0%);
}
</style>
