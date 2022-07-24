<template>
  <div class="c-footer">
    <div class="c-scrolling-tape__item footer-tape">
      <h2 class="banner-text large">Let’s Socialize</h2>
      <div class="logo-icon"></div>
      <h2 class="banner-text outline-text white large">Reach Out</h2>
      <div class="logo-icon"></div>
      <h2 class="banner-text large">Let’s Socialize</h2>
      <div class="logo-icon"></div>
      <h2 class="banner-text outline-text white large">Reach Out</h2>
    </div>

    <nuxt-link class="cta-btn white-btn centralized w-inline-block" to="/">
      <div class="cta-btn__block">
        <div>Book a Discovery call!</div>
      </div>
      <div class="cta-btn__double"></div>
    </nuxt-link>

    <div class="c-footer-links">
      <div class="c-footer-link__wrapper">
        <div class="c-footer-link__block">
          <div class="c-footer-link__inner">
            <div>
              <a class="contact-link" href="mailto:hello@nectrsocial.com">hello@nectrsocial.com</a>
            </div>
            <div>
              <a class="contact-link" href="tel:(206)848-5944">(206) 848-5944</a>
            </div>
          </div>
          <div>
            <a class="c-menu__social-link w-inline-block" href="#"><img loading="lazy" src="/assets/images/facebook-icon.svg"/></a>
            <a class="c-menu__social-link w-inline-block" href="#"><img loading="lazy" src="/assets/images/linkedin-icon.svg"/></a>
            <a class="c-menu__social-link w-inline-block" href="#"><img loading="lazy" src="/assets/images/instagram-icon.svg"/></a>
          </div>
        </div>
        <div class="c-footer-link__block middle">
          <nuxt-link class="c-footer-link w-inline-block" to="/about">
            <div>About Nectr</div>
          </nuxt-link>
          <nuxt-link class="c-footer-link w-inline-block" to="/work">
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
      <div class="c-footer-link__block">
        <img
          class="c-footer-img"
          loading="lazy"
          src="/assets/images/sprout-lockup.svg"/>
      </div>
    </div>

    <div class="copyright-text w-embed w-script">{{ currentYear }} © Nectr</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
