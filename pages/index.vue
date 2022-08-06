<template>
  <div>
    <Header blue-bg />

    <div class="scroller">
      <!-- Done -->
      <div class="l-section hero-section">
        <div class="l-container">
          <div class="hero-block__wrapper">
            <div class="hero-block__double"></div>
            <div class="hero-block">
              <div class="hero-img__wrapper">
                <div class="hero-img__block">
                  <img
                    class="hero-img"
                    loading="lazy"
                    src="/assets/images/hero-img-1.jpg"/><img
                    class="hero-img"
                    loading="lazy"
                    src="/assets/images/hero-img-2.jpg"/><img
                    class="hero-img"
                    loading="lazy"
                    src="/assets/images/hero-img-3.jpg"/><img
                    class="hero-img"
                    loading="lazy"
                    src="/assets/images/hero-img-4.jpg"/>
                </div>
                <div class="down-arrow desktop-hide"></div>
              </div>
              <div class="hero-text__wrapper">
                <h1 class="hero-text" data-paragraph>
                  The digital marketing agency you didn’t know you needed.
                </h1>
                <h3 class="hero-subtext" data-paragraph>
                  We are Nectr - a fast, next- generation, social media-first
                  digital marketing agency built to
                  <span class="medium-text">hit the sweet spot.</span>
                </h3>

                <div class="hero-block__cta">
                  <div class="down-arrow mobile-hide"></div>
                  <c-button btn-text="Book a Kick-Off Call!" large link="/" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Done -->
      <div class="l-section banner-section">
        <div class="c-scrolling-tape">
          <div class="c-scrolling-tape__item">
            <div class="c-scrolling-tape__inner one">
              <div class="logo-icon"></div>
              <div class="banner-text">Hit the sweet spot</div>
              <div class="logo-icon"></div>
              <div class="banner-text outline-text white">Nectr</div>
              <div class="logo-icon"></div>
              <div class="banner-text">Hit the sweet spot</div>
              <div class="logo-icon"></div>
              <div class="banner-text outline-text white">Nectr</div>
              <div class="logo-icon"></div>
              <div class="banner-text">Hit the sweet spot</div>
              <div class="logo-icon"></div>
              <div class="banner-text outline-text white">Nectr</div>
              <div class="logo-icon"></div>
              <div class="banner-text">Hit the sweet spot</div>
              <div class="logo-icon"></div>
              <div class="banner-text outline-text white">Nectr</div>
            </div>
          </div>
          <div class="c-scrolling-tape__item orange-banner">
            <div class="c-scrolling-tape__inner two">
              <div class="logo-icon black"></div>
              <div class="banner-text">Nectr</div>
              <div class="logo-icon black"></div>
              <div class="banner-text outline-text">Hit the sweet spot</div>
              <div class="logo-icon black"></div>
              <div class="banner-text">Nectr</div>
              <div class="logo-icon black"></div>
              <div class="banner-text outline-text">Hit the sweet spot</div>
              <div class="logo-icon black"></div>
              <div class="banner-text">Nectr</div>
              <div class="logo-icon black"></div>
              <div class="banner-text outline-text">Hit the sweet spot</div>
              <div class="logo-icon black"></div>
              <div class="banner-text">Nectr</div>
              <div class="logo-icon black"></div>
              <div class="banner-text outline-text">Hit the sweet spot</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Done -->
      <ClientShowcase />

      <!-- Done -->
      <PortfolioSlider />

      <!-- Done -->
      <div class="l-section no-padding">
        <div class="c-services">
          <div class="l-container sm-container">
            <div class="c-services__header">
              <div data-paragraph>
                We’re a veritable one-stop shop for
                <span class="orange-text">all your social needs.</span>
              </div>
            </div>
            <div class="c-services__list">
              <service-accordion link="/capabilities/photo-video">
                <template #title> Photo &amp; Video </template>
                <template #content>
                  Just the creative, nothing else. We’ll send you photos,
                  videos, or both featuring your product, brand, or service in
                  its finest moments.
                </template>
              </service-accordion>

              <service-accordion link="/capabilities/social-media-mgt">
                <template #title> Social Media Management (Organic) </template>
                <template #content>
                  Hand us the keys to your social channels. Complete,
                  done-for-you social media management solutions with growth
                  strategies baked in.
                </template>
              </service-accordion>

              <service-accordion link="/capabilities/tiktok-mgt">
                <template #title> TikTok Account Management </template>
                <template #content>
                  A first-of-its-kind channel management package created
                  exclusively for TikTok. We do everything, you watch your
                  business account grow.
                </template>
              </service-accordion>

              <service-accordion link="/capabilities/facebook-instagram-ads">
                <template #title> Facebook &amp; Instagram Ads </template>
                <template #content>
                  Ad creation/distribution, copywriting, creative testing, and
                  insightful reporting.
                </template>
              </service-accordion>

              <service-accordion link="/capabilities/google-ads">
                <template #title> Google Ads </template>
                <template #content>
                  Show up where people are searching.
                </template>
              </service-accordion>

              <service-accordion link="/capabilities/tiktok-ads">
                <template #title> Tik Tok Ads </template>
                <template #content>
                  The greenest ad space on the block.
                </template>
              </service-accordion>

              <service-accordion link="/capabilities/consulting">
                <template #title> Consulting </template>
                <template #content>
                  You do it, we help. Stay the course with channel audits, video
                  call check-ins, and ongoing consulting services.
                </template>
              </service-accordion>
            </div>
            <c-button
              btn-text="Book a Discovery call!"
              centered
              link="/"
              white/>
          </div>
        </div>
      </div>

      <!-- Done -->
      <TeamSlider />

      <!-- Done -->
      <div class="l-section no-padding">
        <div class="c-cta">
          <div class="l-container flex-container centralized">
            <div class="cta-text__wrapper">
              <div class="cta-text" data-paragraph>
                Are you a micro or macro influencer, a model, aspiring?
              </div>
              <h5 data-paragraph>
                The Nectr influencer &amp; model network exists to connect you
                with cool opportunities, made possible by our clients.
              </h5>
            </div>
            <c-button btn-text="Learn More" link="/network" white />
          </div>
        </div>
      </div>

      <!-- Done -->
      <TestimonialSlider />

      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'en'
      },
      title: this.title,
      meta: [...this.meta]
    }
  },
  computed: {
    meta() {
      return this.mxMetaUtils({
        title: this.title,
        description: this.description
      })
    },
    description() {
      return ''
    },
    title() {
      return 'NectrSocial'
    }
  },
  mounted() {
    // eslint-disable-next-line no-new
    new this.$pageAnimation('.scroller')
    this.$banner('.scroller')
  }
}
</script>

<style scoped>
.c-slider {
  /* pointer-events: none; */
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.c-slider::-webkit-scrollbar {
  display: none;
}
.c-slider > * {
  pointer-events: auto;
}

.c-scrolling-tape__inner {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
