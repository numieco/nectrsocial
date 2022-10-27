<template>
  <div class="c-menu">
    <div class="c-menu__inner">
      <div class="c-menu__link-wrapper">
        <nuxt-link
          class="c-menu__link w-inline-block"
          data-menu="one"
          to="/"
          @click.native="closeMenu"
          @mouseout.native="menuHoverOut($event)"
          @mouseover.native="menuHoverIn($event)">
          <div class="fill-text">Home</div>
          <div class="outline-text white">Home</div>
        </nuxt-link>
        <nuxt-link
          class="c-menu__link w-inline-block"
          data-menu="two"
          to="/about"
          @click.native="closeMenu"
          @mouseout.native="menuHoverOut($event)"
          @mouseover.native="menuHoverIn($event)">
          <div class="fill-text">About</div>
          <div class="outline-text white">About</div>
        </nuxt-link>
        <nuxt-link
          class="c-menu__link w-inline-block"
          data-menu="three"
          to="/portfolio"
          @click.native="closeMenu"
          @mouseout.native="menuHoverOut($event)"
          @mouseover.native="menuHoverIn($event)">
          <div class="fill-text">Portfolio</div>
          <div class="outline-text white">Portfolio</div>
        </nuxt-link>
        <nuxt-link
          class="c-menu__link w-inline-block"
          data-menu="four"
          to="/capabilities"
          @click.native="closeMenu"
          @mouseout.native="menuHoverOut($event)"
          @mouseover.native="menuHoverIn($event)">
          <div class="fill-text">Capabilities</div>
          <div class="outline-text white">Capabilities</div>
        </nuxt-link>
        <nuxt-link
          class="c-menu__link w-inline-block"
          data-menu="five"
          to="/careers"
          @click.native="closeMenu"
          @mouseout.native="menuHoverOut($event)"
          @mouseover.native="menuHoverIn($event)">
          <div class="fill-text">Careers</div>
          <div class="outline-text white">Careers</div>
        </nuxt-link>
      </div>
      <nuxt-link
        class="c-menu__sub-link w-inline-block"
        to="/network"
        @click.native="closeMenu">
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
        src="/assets/images/menu-img-1.jpg"/>
      <img
        class="c-menu__img two"
        loading="lazy"
        src="/assets/images/nectr-team.png"/>
      <img
        class="c-menu__img three"
        loading="lazy"
        src="/assets/images/portfolio-hover.jpg"/>
      <img
        class="c-menu__img four"
        loading="lazy"
        src="/assets/images/salish-header.jpg"/>
      <img
        class="c-menu__img five"
        loading="lazy"
        src="/assets/images/team-img.jpg"/>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    menuOpen() {
      return this.$store.getters.menuState
    }
  },

  methods: {
    closeMenu() {
      document.querySelector('.c-nav__btn').click()
    },

    menuHoverIn(event) {
      const imgId = event.currentTarget.dataset.menu
      const targetEl = document.querySelector(`.c-menu__img.${imgId}`)
      this.$gsap.to(targetEl, {
        opacity: 1
      })
    },

    menuHoverOut(event) {
      const imgId = event.currentTarget.dataset.menu
      const targetEl = document.querySelector(`.c-menu__img.${imgId}`)
      this.$gsap.to(targetEl, {
        opacity: 0
      })
    }
  }
}
</script>

<style scoped>
.c-menu__img.two {
  object-position: 50% 10%;
}
.c-menu__link {
  position: relative;
}
.c-menu__link > .outline-text {
  position: absolute;
  top: 0%;
  left: 0%;
  right: 0%;
  bottom: 0%;
}
.c-menu__link,
.c-menu__sub-link {
  transform: translateY(70px);
  opacity: 0;
}
.c-menu__social-link {
  opacity: 0;
}
.fill-text {
  transition: opacity 200ms ease-in-out;
}
.c-menu__link:hover > .fill-text {
  opacity: 0;
}
.c-menu__sub-link:hover > .menu-line {
  transform: translateX(0%);
}
.c-menu__img {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
