<template>
  <div class="l-section no-padding">
    <div class="l-section__header">
      <div class="l-container">
        <div class="c-section-header">
          <div class="header-text">
            <h2 data-paragraph>Meet the Charm</h2>
            <h4 class="neutral-text" data-paragraph>
              When hummingbirds move together, they are dubbed a charm. They fly
              together when they need to get things done, like pollinate a field
              of wildflowers, or crush social media.
            </h4>
          </div>
          <div class="c-slider-controls mobile-hide">
            <div
              class="c-slider-control__btn slider-prev"
              :class="hasScrolled ? '' : 'is-disabled'"
              @click="scrollLeft">
              <div class="btn-dot"></div>
              <div>Previous</div>
            </div>
            <div
              class="c-slider-control__btn slider-next"
              :class="doneScrolling ? 'is-disabled' : ''"
              @click="scrollRight">
              <div>Next</div>
              <div class="btn-dot next"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      ref="teamSlider"
      class="c-slider team-slider dragscroll"
      @scroll="checkScroll">
      <team-member
        img-src-one="/assets/images/Zak-img.jpg"
        img-src-two="/assets/images/Zak-hover.jpg"
        small>
        <template #name> Zak Kosher </template>
        <template #role> Founder </template>
      </team-member>

      <team-member
        img-src-one="/assets/images/Dylan.jpg"
        img-src-two="/assets/images/dylan-hover.jpg"
        small>
        <template #name> Dylan Rabinowitz </template>
        <template #role> Director Of Client Services </template>
      </team-member>

      <team-member
        img-src-one="/assets/images/Kortney1.jpg"
        img-src-two="/assets/images/Kortney2-hover.jpg"
        small>
        <template #name> Kortney Gloska </template>
        <template #role> Creative Director </template>
      </team-member>

      <team-member
        img-src-one="/assets/images/Jon-01.jpg"
        img-src-two="/assets/images/Jon-hover.jpg"
        small>
        <template #name> Jonathan Ochoa </template>
        <template #role> Social Media Manager </template>
      </team-member>

      <team-member
        img-src-one="/assets/images/Gianna 01.jpg"
        img-src-two="/assets/images/Gianna-hover.jpg"
        small>
        <template #name> Gianna Chen </template>
        <template #role> Social Media Manager </template>
      </team-member>

      <team-member
        img-src-one="/assets/images/Tiare1.jpg"
        img-src-two="/assets/images/Tiare-hover.jpg"
        small>
        <template #name> Tiare Bowman </template>
        <template #role> Social Media Manager </template>
      </team-member>

      <team-member
        img-src-one="/assets/images/Ashley 01.jpg"
        img-src-two="/assets/images/Ashley-hover.jpg"
        small>
        <template #name> Ashley Forst </template>
        <template #role> Social Media Manager </template>
      </team-member>

      <team-member
        img-src-one="/assets/images/Appa 02.jpg"
        img-src-two="/assets/images/Appa-hover.jpg"
        small>
        <template #name> Apa </template>
        <template #role> Dylan's Dog </template>
      </team-member>
    </div>
    <c-button btn-text="Learn More" centered hide-on-mobile link="/about" />
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

  mounted() {
    this.$autoScroll(this.$refs.teamSlider)
  },

  methods: {
    checkScroll() {
      if (this.$refs.teamSlider.scrollLeft > 0) {
        this.hasScrolled = true
      } else this.hasScrolled = false

      if (
        this.$refs.teamSlider.offsetWidth + this.$refs.teamSlider.scrollLeft >=
        this.$refs.teamSlider.scrollWidth
      ) {
        this.doneScrolling = true
      } else this.doneScrolling = false
    },

    scrollRight() {
      const team = document.querySelector('.c-team.small')
      const teamWidth = team.clientWidth
      this.$slideRight(this.$refs.teamSlider, teamWidth)
    },

    scrollLeft() {
      const team = document.querySelector('.c-team.small')
      const teamWidth = team.clientWidth
      this.$slideLeft(this.$refs.teamSlider, teamWidth)
    }
  }
}
</script>

<style scoped>
.header-text {
  max-width: 900px;
}
.team-slider {
  pointer-events: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  max-width: 1550px;
  margin-left: auto;
  margin-right: auto;
}
.c-team {
  pointer-events: auto;
}
.team-slider::-webkit-scrollbar {
  display: none;
}
.c-slider-control__btn {
  pointer-events: auto;
}
.c-slider-control__btn.is-disabled {
  pointer-events: none;
}
</style>
