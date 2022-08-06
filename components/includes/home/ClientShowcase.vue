<template>
  <div class="l-section">
    <div class="l-container flex-container">
      <div>
        <h2 data-paragraph>Client Showcase</h2>
        <h4 class="neutral-text" data-paragraph>
          50+ businesses have trusted us, US!
        </h4>
      </div>
      <div class="c-showcase-grid">
        <div class="c-showcase__wrapper">
          <div class="c-showcase-grid__item normal">
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/ably-logo.png"/>
            </div>
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/ssrta.png"/>
            </div>
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/skin-perfect.png"/>
            </div>
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/birch-road.png"/>
            </div>
          </div>
          <div class="c-showcase-grid__item normal">
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/ably-logo.png"/>
            </div>
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/ssrta.png"/>
            </div>
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/skin-perfect.png"/>
            </div>
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/birch-road.png"/>
            </div>
          </div>
        </div>
        <div class="c-showcase__wrapper">
          <div class="c-showcase-grid__item invert">
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/frost.png"/>
            </div>
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/sdc.png"/>
            </div>
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/bricksneed.png"/>
            </div>
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"/>
            </div>
          </div>
          <div class="c-showcase-grid__item invert">
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/frost.png"/>
            </div>
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/sdc.png"/>
            </div>
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/bricksneed.png"/>
            </div>
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"/>
            </div>
          </div>
        </div>
        <div class="c-showcase__wrapper">
          <div class="c-showcase-grid__item normal">
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/salish.png"/>
            </div>
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/ombraz.png"/>
            </div>
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/lens.png"/>
            </div>
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/shroomy.png"/>
            </div>
          </div>
          <div class="c-showcase-grid__item normal">
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/salish.png"/>
            </div>
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/ombraz.png"/>
            </div>
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/lens.png"/>
            </div>
            <div class="c-showcase__block">
              <img
                class="c-showcase-logo"
                loading="lazy"
                src="/assets/images/shroomy.png"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.scrollingLogos()
  },

  methods: {
    scrollingLogos() {
      const wrapper = document.querySelector('.c-showcase-grid__item')
      const wrapperHeight = wrapper.scrollHeight
      const tl = this.$gsap.timeline()
      tl.to('.c-showcase-grid__item.normal', {
        y: -wrapperHeight - 48,
        duration: 15,
        repeat: -1,
        ease: 'none'
      })
      tl.from(
        '.c-showcase-grid__item.invert',
        {
          y: -wrapperHeight,
          duration: 15,
          repeat: -1,
          ease: 'none'
        },
        '<'
      )
    }
  }
}
</script>
