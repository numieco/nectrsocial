<template>
  <div class="c-error-container">
    <Header />
    <div class="c-error-wrapper">
      <div class="error-icon">
        <img alt="" loading="lazy" src="/assets/images/error.svg" />
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
        <a class="c-footer-link w-inline-block" href="#">
          <div>About Nectr</div>
        </a>
        <a class="c-footer-link w-inline-block" href="#">
          <div>Our Portfolio</div>
        </a>
        <a class="c-footer-link w-inline-block" href="#">
          <div>Our Capabilities</div>
        </a>
        <a class="c-footer-link w-inline-block" href="#">
          <div>Careers</div>
        </a>
      </div>
    </div>
    <div>
      <a class="c-menu__social-link w-inline-block" href="#"><img alt="" loading="lazy" src="/assets/images/facebook-icon.svg"/></a>
      <a class="c-menu__social-link w-inline-block" href="#"><img alt="" loading="lazy" src="/assets/images/linkedin-icon.svg"/></a>
      <a class="c-menu__social-link w-inline-block" href="#"><img alt="" loading="lazy" src="/assets/images/instagram-icon.svg"/></a>
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
