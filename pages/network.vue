<template>
  <div>
    <Header blue-bg />
    <div class="scroller">
      <div class="l-section hero-section small">
        <div class="l-container">
          <div class="hero-block__wrapper">
            <div class="hero-block__double"></div>
            <div class="hero-block small">
              <div class="hero-text__wrapper smallest">
                <h1 class="network-hero__text" data-paragraph>
                  Nectr's Influencer &amp; Model Network
                </h1>
                <h4 class="neutral-text" data-paragraph>
                  Paid modeling and influencer partnership opportunities.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="l-section no-padding">
        <div class="c-network__wrapper">
          <div class="logo-icon yellow large"></div>

          <div class="network-text__wrapper">
            <h2 class="alt-h2" data-paragraph>
              Are you a micro or macro influencer, a model, aspiring?
            </h2>
            <h5 class="neutral-text no-margin" data-paragraph>
              The Nectr influencer &amp; model network exists to connect you
              with cool opportunities, made possible by our clients.<br /><br />Join
              the network below by providing us with some info and get notified
              via email next time we have an opportunity that we think you’d be
              a great fit for!
            </h5>
          </div>

          <div class="c-network__slider">
            <div class="c-network__slide-wrapper">
              <div class="c-network__slide">
                <img
                  alt=""
                  class="cover-image"
                  loading="lazy"
                  src="/assets/images/network-1.jpg"/>
              </div>
              <div class="c-network__slide">
                <img
                  alt=""
                  class="cover-image"
                  loading="lazy"
                  src="/assets/images/network-2.jpg"/>
              </div>
              <div class="c-network__slide">
                <img
                  alt=""
                  class="cover-image"
                  loading="lazy"
                  src="/assets/images/network-3.jpg"/>
              </div>
              <div class="c-network__slide">
                <img
                  alt=""
                  class="cover-image"
                  loading="lazy"
                  src="/assets/images/network-4.jpg"/>
              </div>
              <div class="c-network__slide">
                <img
                  alt=""
                  class="cover-image"
                  loading="lazy"
                  src="/assets/images/network-5.jpg"/>
              </div>
              <div class="c-network__slide">
                <img
                  alt=""
                  class="cover-image"
                  loading="lazy"
                  src="/assets/images/network-6.jpg"/>
              </div>
              <div class="c-network__slide">
                <img
                  alt=""
                  class="cover-image"
                  loading="lazy"
                  src="/assets/images/network-7.jpg"/>
              </div>
            </div>
            <div class="c-network__slide-wrapper">
              <div class="c-network__slide">
                <img
                  alt=""
                  class="cover-image"
                  loading="lazy"
                  src="/assets/images/network-1.jpg"/>
              </div>
              <div class="c-network__slide">
                <img
                  alt=""
                  class="cover-image"
                  loading="lazy"
                  src="/assets/images/network-2.jpg"/>
              </div>
              <div class="c-network__slide">
                <img
                  alt=""
                  class="cover-image"
                  loading="lazy"
                  src="/assets/images/network-3.jpg"/>
              </div>
              <div class="c-network__slide">
                <img
                  alt=""
                  class="cover-image"
                  loading="lazy"
                  src="/assets/images/network-4.jpg"/>
              </div>
              <div class="c-network__slide">
                <img
                  alt=""
                  class="cover-image"
                  loading="lazy"
                  src="/assets/images/network-5.jpg"/>
              </div>
              <div class="c-network__slide">
                <img
                  alt=""
                  class="cover-image"
                  loading="lazy"
                  src="/assets/images/network-6.jpg"/>
              </div>
              <div class="c-network__slide">
                <img
                  alt=""
                  class="cover-image"
                  loading="lazy"
                  src="/assets/images/network-7.jpg"/>
              </div>
            </div>
          </div>

          <div class="network-text__wrapper second">
            <h2 class="alt-h2" data-paragraph>
              Applying is easy, just answer a few questions, and off we go!
            </h2>
            <h5 class="neutral-text" data-paragraph>
              If you get approved, you’ll be added to our priority list of
              models &amp; influencers who we reach out to
              <span class="sbold-text">first</span> with modeling and influencer
              partnership opportunities.
            </h5>
          </div>

          <div class="c-network__prompt">
            <div data-paragraph>
              Some opportunities may require travel.<br />All Nectr Network
              opportunities are cash compensated. 💸
            </div>
          </div>

          <c-button btn-text="Apply to join network" centered link="/careers" />
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
export default {
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
      return 'Network | NectrSocial'
    }
  },
  mounted() {
    // eslint-disable-next-line no-new
    new this.$pageAnimation('.scroller')
    this.networkSlider()
  },

  methods: {
    networkSlider() {
      const wrapper = document.querySelector('.c-network__slide-wrapper')
      const wrapperWidth = wrapper.scrollWidth
      const tl = this.$gsap.timeline()
      tl.to('.c-network__slide-wrapper', {
        x: -wrapperWidth,
        duration: 30,
        repeat: -1,
        ease: 'none'
      })
    }
  }
}
</script>

<style scoped>
.c-network__slide {
  border: none;
}
.c-network__slider {
  overflow: hidden;
}
.c-network__slide-wrapper {
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
}
</style>
