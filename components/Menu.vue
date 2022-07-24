<template>
  <div class="c-menu" :class="menuOpen ? 'is-open' : ''">
    <div class="c-menu__inner">
      <div class="c-menu__link-wrapper">
        <a
          aria-current="page"
          class="c-menu__link w-inline-block w--current"
          href="index.html">
          <div>Home</div>
        </a>
        <a class="c-menu__link w-inline-block" href="about.html">
          <div>About</div>
        </a>
        <a class="c-menu__link w-inline-block" href="work.html">
          <div>Portfolio</div>
        </a>
        <a class="c-menu__link w-inline-block" href="capabilities.html">
          <div>Capabilities</div>
        </a>
        <a class="c-menu__link w-inline-block" href="careers.html">
          <div>Careers</div>
        </a>
      </div>
      <a class="c-menu__sub-link w-inline-block" href="network.html">
        <div>Nectr Network</div>
        <div class="menu-line"></div>
      </a>
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
