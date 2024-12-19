<template>
  <div class="l-section no-padding">
    <div class="l-section__header">
      <div class="l-container">
        <div class="c-section-header">
          <div>
            <h2 data-paragraph>Our Portfolio</h2>
            <h4 class="neutral-text" data-paragraph>
              Browse selected case studies from successful projects.
            </h4>
          </div>
          <div class="c-slider-controls mobile-hide">
            <div class="c-slider-control__btn slider-prev" :class="hasScrolled ? '' : 'is-disabled'"
              @click="scrollLeft">
              <div class="btn-dot"></div>
              <div>Previous</div>
            </div>
            <div class="c-slider-control__btn slider-next" :class="doneScrolling ? 'is-disabled' : ''"
              @click="scrollRight">
              <div>Next</div>
              <div class="btn-dot next"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref="csSlider" class="c-slider portfolio-slider" @scroll="checkScroll">
      <casestudy badge img-src="/assets/images/astra_hotel.jpg" link="/portfolio/astra-hotel-seattle">
        <template #casestudy-name> Astra Hotel Seattle </template>
        <template #casestudy-details> Building an Awarded Social Presence </template>
      </casestudy>
      <casestudy img-src="/assets/images/gw-intro.jpg" link="/portfolio/good-and-well">
        <template #casestudy-name> Good & Well Supply Co. </template>
        <template #casestudy-details> Improved Brand Voice & 4x Return </template>
      </casestudy>
      <casestudy img-src="/assets/images/Salish-Bath.jpg" link="/portfolio/salish-lodge">
        <template #casestudy-name> Salish Lodge </template>
        <template #casestudy-details> Rebuilding Post-Pandemic </template>
      </casestudy>

      <casestudy img-src="/assets/images/due-thumb.jpg" link="/portfolio/duecucina">
        <template #casestudy-name> Due' Cucina </template>
        <template #casestudy-details> Authentically Italian </template>
      </casestudy>

      <casestudy img-src="/assets/images/qnight-thumb.jpg" link="/portfolio/qnightclub">
        <template #casestudy-name> Q Nightclub </template>
        <template #casestudy-details> Sold Out Shows </template>
      </casestudy>

      <casestudy img-src="/assets/images/kyc-intro.jpeg" link="/portfolio/keep-your-city-smiling">
        <template #casestudy-name> KYCS </template>
        <template #casestudy-details> The Big Pivot </template>
      </casestudy>

      <casestudy img-src="/assets/images/ombraz-thumb.jpg" link="/portfolio/ombraz-sunglasses">
        <template #casestudy-name> Ombraz Sunglasses </template>
        <template #casestudy-details> 3.7x Return on Ad Spend </template>
      </casestudy>

      <casestudy img-src="/assets/images/frost-thumb.jpg" link="/portfolio/frost">
        <template #casestudy-name> Frost </template>
        <template #casestudy-details> Driving Foot Traffic </template>
      </casestudy>

      <casestudy img-src="/assets/images/ably-thumb.jpg" link="/portfolio/ably">
        <template #casestudy-name> Ably </template>
        <template #casestudy-details> 0 to 40k Instagram Followers </template>
      </casestudy>
    </div>
    <c-button btn-text="View all case studies" centered link="/portfolio" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasScrolled: false,
      doneScrolling: false
    }
  },

  methods: {
    checkScroll() {
      if (this.$refs.csSlider.scrollLeft > 0) {
        this.hasScrolled = true
      } else this.hasScrolled = false

      if (
        this.$refs.csSlider.offsetWidth + this.$refs.csSlider.scrollLeft >=
        this.$refs.csSlider.scrollWidth
      ) {
        this.doneScrolling = true
      } else this.doneScrolling = false
    },

    scrollRight() {
      const casestudy = document.querySelector('.c-casestudy')
      const casestudyWidth = casestudy.clientWidth
      this.$slideRight(this.$refs.csSlider, casestudyWidth)
    },

    scrollLeft() {
      const casestudy = document.querySelector('.c-casestudy')
      const casestudyWidth = casestudy.clientWidth
      this.$slideLeft(this.$refs.csSlider, casestudyWidth)
    }
  }
}
</script>

<style scoped>
.portfolio-slider {
  pointer-events: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  max-width: 1550px;
  margin-left: auto;
  margin-right: auto;
}
.c-casestudy {
  pointer-events: auto;
}
.portfolio-slider::-webkit-scrollbar {
  display: none;
}
.c-slider-control__btn {
  pointer-events: auto;
}
.c-slider-control__btn.is-disabled {
  pointer-events: none;
}
</style>
