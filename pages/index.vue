<template>
  <div>
    <div :class="['ui-elements', uiVisible ? 'visible' : '']">
      <Header blue-bg />
    </div>
    <div class="scroller">
      <div class="l-section hero-section">
        <div class="l-container cc-hero">
          <div class="hero-block__wrapper">
            <div class="hero-block">
              <div class="hero-img__wrapper">
                <div class="hero-img__block">
                  <video 
                    autoplay="true" :class="['hero-video', videoLoaded ? 'fade-in' : '']" loop
                    muted playsinline src="/assets/videos/landing.mp4" style="pointer-events: none"
                    @loadeddata="handleVideoLoaded"></video>
                </div>
                <div 
                  :class="[
                    'down-arrow desktop-hide',
                    uiVisible ? 'visible' : '',
                  ]"></div>
              </div>
              <div :class="['hero-text__wrapper', uiVisible ? 'visible' : '']">
                <div 
                  :class="[
                    'hero-wave ui-elements',
                    uiVisible ? 'visible' : '',
                  ]">
                  <img src="/assets/images/wave.svg" />
                </div>
                <h1 class="hero-text">Howdy</h1>
                <h3 class="hero-subtext" data-paragraph>
                  We're Nectr - a fast, next-generation, social media-first
                  digital marketing agency built to
                  <span class="medium-text">hit the sweet spot.</span>
                </h3>

                <div class="hero-block__cta">
                  <div :class="['down-arrow ', uiVisible ? 'visible' : '']"></div>

                  <c-button btn-text="Get in Touch!" large typeform />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BannerSection />

      <ClientShowcase />

      <PortfolioSlider />

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
              <service-accordion link="/capabilities/social-media-management">
                <template #title> Social Media Management (Organic) </template>
                <template #content>
                  Hand us the keys to your social channels. Complete,
                  done-for-you social media management solutions with growth
                  strategies baked in.
                </template>
              </service-accordion>

              <service-accordion link="/capabilities/meta-ads">
                <template #title> Meta Ads </template>
                <template #content>
                  Ad creation/distribution, copywriting, creative testing, and
                  insightful reporting.
                </template>
              </service-accordion>

              <service-accordion link="/capabilities/googleads">
                <template #title> Google Ads </template>
                <template #content>
                  Show up where people are searching.
                </template>
              </service-accordion>

              <service-accordion link="/capabilities/photo-video">
                <template #title> Photo &amp; Video </template>
                <template #content>
                  Just the creative, nothing else. We’ll send you photos,
                  videos, or both featuring your product, brand, or service in
                  its finest moments.
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
            <c-button btn-text="Get in Touch!" centered typeform white />
          </div>
        </div>
      </div>

      <TeamSlider />

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

      <TestimonialSlider />
      <Results />

      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoLoaded: false,
      uiVisible: false,
    }
  },

  head() {
    return {
      htmlAttrs: {
        lang: 'en',
      },
      title: this.title,
      meta: [...this.meta],
    }
  },

  computed: {
    meta() {
      return this.mxMetaUtils({
        title: this.title,
        description: this.description,
      })
    },
    description() {
      return ''
    },
    title() {
      return 'NectrSocial'
    },
  },

  mounted() {
    this.$initScroll('.scroller')
    this.$paragraph()
    this.$banner('.scroller')
    this.floatingArrow()
    const externalScript = document.createElement('script');
    externalScript.src = 'https://seo-fixer.writesonic.com/site-audit/fixer-script/index.js';
    externalScript.id = 'wsAiSeoMb';
    externalScript.type = 'text/javascript';
    externalScript.async = true;

    externalScript.onload = () => {
      // Inline configuration script
      const configScript = document.createElement('script');
      configScript.type = 'text/javascript';
      configScript.id = 'wsAiSeoInitScript';

      // Directly use textContent (prevents encoding issues)
      configScript.textContent = `
        wsSEOfixer.configure({
          hostURL: 'https://seo-fixer.writesonic.com',
          siteID: '6808526b03610003f67ef843'
        });
      `;
      document.head.appendChild(configScript);
    };

    document.head.appendChild(externalScript);
  },

  methods: {
    handleVideoLoaded() {
      this.videoLoaded = true
      // Wait 2000ms then show UI
      setTimeout(() => {
        this.uiVisible = true
      }, 1000)
    },

    floatingArrow() {
      const bounce = this.$gsap.timeline({ repeat: -1 })
      bounce
        .to('.down-arrow', 1, { y: '-=15', ease: 'Sine.easeInOut' })
        .to('.down-arrow', 1, { y: '+=15', ease: 'Sine.easeInOut' })
    },
  },
}
</script>

<style scoped>

.hero-text {
  z-index: 2;
}

.hero-video {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.hero-video.fade-in {
  opacity: 1;
}

.ui-elements,
.hero-text__wrapper,
.down-arrow,
.page-content {
  opacity: 0;
  transition: opacity 0.6s ease-in-out;
}

.ui-elements.visible,
.hero-text__wrapper.visible,
.down-arrow.visible,
.page-content.visible {
  opacity: 1 !important;
}

.l-section.hero-section {
  background: white;
  max-height: none;
  height: 100vh;
  padding: 0px;
}

.hero-wave {
  margin-bottom: 12px;
  width: 100px;
  height: 100px;
}

.l-container.cc-hero {
  max-width: none !important;
}

.hero-img__wrapper {
  height: auto;
}

.hero-block {
  position: relative;
  left: unset;
  top: unset;
  border: none;
  padding: 0px;
}

.hero-img__wrapper {
  width: 50%;
  height: 100%;
  margin: 0px;
}

.hero-img__block {
  background: none !important;
  opacity: 0.5;
  width: 100%;
  max-width: none;
}

.hero-text__wrapper {
  width: 50%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0px 50px;
}

.hero-img__wrapper {
  background: rgba(10, 21, 31, 0.89);
}

@media screen and (min-width: 992px) {


  .hero-block {
    align-items: center;
  }
}

.hero-video {
  pointer-events: none;
}

.hero-video::-webkit-media-controls-panel {
  display: none !important;
  opacity: 1 !important;
}

.down-arrow {
  transform: scale(0.7);
}

.hero-img__block > video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-img__block {
  height: 100%;
  min-height: 0px;
}

.hero-block__cta {
  padding-top: 30px;
  flex-direction: column-reverse;
}

.hero-block__cta .cta-btn {
  margin-bottom: 20px;
}

@media screen and (max-width: 767px) {
  .l-section.hero-section {
    height: 100vh;
  }

  .hero-wave {
    display: none;
  }

  .l-container.cc-hero,
  .hero-block__wrapper,
  .hero-block {
    height: 100%;
  }

  .hero-block {
    align-items: center;
    justify-content: center;
  }

  .hero-text__wrapper,
  .hero-subtext {
    color: white;
  }

  .hero-text__wrapper {
    margin-top: 80px;
    padding: 0px;
    max-width: none;
    width: 60%;
  }

  .hero-img__wrapper {
    width: 100%;
    height: 100%;
    background: rgba(10, 21, 31, 0.89);
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .hero-block__cta .cta-btn > .cta-btn__block {
    background-color: #ffffff !important;
    color: #13293d !important;
  }

  .down-arrow {
    filter: grayscale(1) invert(1);
  }
}

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

.c-cta {
  padding-top: 170px;
  padding-bottom: 170px;
}
</style>
