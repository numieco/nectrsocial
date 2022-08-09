<template>
  <div class="c-error-container">
    <Header blue-bg />

    <div class="c-error-wrapper">
      <div class="error-icon">
        <img loading="lazy" src="/assets/images/error.svg" />
      </div>
      <h1>Did you get lost?</h1>
      <div class="c-error-block">
        <h5>
          You can go back to the home page (click our logo) or check out any of
          these other pages.
        </h5>
      </div>
    </div>
    <div class="c-error-links__wrapper">
      <div class="c-footer-link__block middle">
        <nuxt-link class="c-footer-link w-inline-block" to="/about">
          <div>About Nectr</div>
        </nuxt-link>
        <nuxt-link class="c-footer-link w-inline-block" to="/portfolio">
          <div>Our Portfolio</div>
        </nuxt-link>
        <nuxt-link class="c-footer-link w-inline-block" to="/capabilities">
          <div>Our Capabilities</div>
        </nuxt-link>
        <nuxt-link class="c-footer-link w-inline-block" to="/careers">
          <div>Careers</div>
        </nuxt-link>
      </div>
    </div>
    <div>
      <a class="c-menu__social-link w-inline-block" href="#"><img loading="lazy" src="/assets/images/facebook-icon.svg"/></a>
      <a class="c-menu__social-link w-inline-block" href="#"><img loading="lazy" src="/assets/images/linkedin-icon.svg"/></a>
      <a class="c-menu__social-link w-inline-block" href="#"><img loading="lazy" src="/assets/images/instagram-icon.svg"/></a>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: ['error'],

  head() {
    return {
      title: 'Page Not Found',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Error Page'
        }
      ]
    }
  }
}
</script>
