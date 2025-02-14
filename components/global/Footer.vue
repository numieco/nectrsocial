<template>
  <div class="c-footer">
    <div class="tape">
      <div class="c-scrolling-tape__item footer-tape">
        <h2 class="banner-text large">Let’s Socialize</h2>
        <div class="logo-icon"></div>
        <h2 class="banner-text outline-text white large">Reach Out</h2>
        <div class="logo-icon"></div>
        <h2 class="banner-text large">Let’s Socialize</h2>
        <div class="logo-icon"></div>
        <h2 class="banner-text outline-text white large">Reach Out</h2>
        <div class="logo-icon"></div>
        <h2 class="banner-text large">Let’s Socialize</h2>
        <div class="logo-icon"></div>
        <h2 class="banner-text outline-text white large">Reach Out</h2>
        <div class="logo-icon"></div>
        <h2 class="banner-text large">Let’s Socialize</h2>
        <div class="logo-icon"></div>
        <h2 class="banner-text outline-text white large">Reach Out</h2>
        <div class="logo-icon"></div>
        <h2 class="banner-text large">Let’s Socialize</h2>
        <div class="logo-icon"></div>
        <h2 class="banner-text outline-text white large">Reach Out</h2>
      </div>
      <div class="c-scrolling-tape__item footer-tape">
        <h2 class="banner-text large">Let’s Socialize</h2>
        <div class="logo-icon"></div>
        <h2 class="banner-text outline-text white large">Reach Out</h2>
        <div class="logo-icon"></div>
        <h2 class="banner-text large">Let’s Socialize</h2>
        <div class="logo-icon"></div>
        <h2 class="banner-text outline-text white large">Reach Out</h2>
        <div class="logo-icon"></div>
        <h2 class="banner-text large">Let’s Socialize</h2>
        <div class="logo-icon"></div>
        <h2 class="banner-text outline-text white large">Reach Out</h2>
        <div class="logo-icon"></div>
        <h2 class="banner-text large">Let’s Socialize</h2>
        <div class="logo-icon"></div>
        <h2 class="banner-text outline-text white large">Reach Out</h2>
        <div class="logo-icon"></div>
        <h2 class="banner-text large">Let’s Socialize</h2>
        <div class="logo-icon"></div>
        <h2 class="banner-text outline-text white large">Reach Out</h2>
      </div>
    </div>

    <c-button btn-text="Get in Touch" centered typeform white />

    <div class="c-footer-links">
      <div class="c-footer-link__wrapper">
        <div class="c-footer-link__block">
          <div class="c-footer-link__inner">
            <div>
              <a class="contact-link" href="mailto:hello@nectrsocial.com">
                hello@nectrsocial.com
              </a>
            </div>
            <!-- <div>
              <a class="contact-link" href="tel:(206)848-5944">(206) 848-5944</a>
            </div> -->
          </div>
          <div>
            <a
              class="c-menu__social-link w-inline-block"
              href="https://www.facebook.com/nectrsocial/"
              target="_blank">
              <img loading="lazy" src="/assets/images/facebook-icon.svg" />
            </a>
            <a
              class="c-menu__social-link w-inline-block"
              href="https://www.linkedin.com/company/nectr-social/"
              target="_blank">
              <img loading="lazy" src="/assets/images/linkedin-icon.svg" />
            </a>
            <a
              class="c-menu__social-link w-inline-block"
              href="https://www.instagram.com/nectrsocial/?hl=en"
              target="_blank">
              <img loading="lazy" src="/assets/images/instagram-icon.svg" />
            </a>
          </div>
        </div>
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
          <nuxt-link class="c-footer-link last w-inline-block" to="/contact">
            <div>Contact</div>
          </nuxt-link>
        </div>
      </div>
      <div class="c-footer-link__block">
        <img
          class="c-footer-img"
          loading="lazy"
          src="/assets/images/sprout-lockup.png" />
      </div>
    </div>

    <div class="footer-bottom">
      <div class="copyright-text w-embed w-script">
        {{ currentYear }} © Nectr
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },

  mounted() {
    this.$footer()
  },
}
</script>

<style scoped>
.c-footer-link__block.middle {
  min-height: 144px;
}
.c-footer-link.last {
  flex-grow: 1;
  background: #0c1925;
}
.c-footer-img {
  object-fit: cover;
}
.tape {
  display: flex;
  align-items: center;
}
.footer-tape {
  min-width: 0px;
  width: auto;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
}
.footer-bottom {
  padding: 0px 80px 20px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media screen and (max-width: 767px) {
  .c-footer-link__block.middle {
    min-height: 128px;
  }
  .c-footer-img {
    width: 160px;
    height: 60px;
  }
  .c-footer-link__wrapper {
    width: 100%;
  }
  .footer-bottom {
    padding: 0px 0px 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .copyright-text {
    margin-top: 10px;
  }
}
</style>
