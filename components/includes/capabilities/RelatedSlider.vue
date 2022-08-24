<template>
  <div class="l-section">
    <div class="l-section__header no-padding">
      <div class="l-container">
        <div
          class="c-section-header"
          :class="caseStudyLength <= 2 ? 'even' : ''">
          <div>
            <h2 data-paragraph>Related Case Studies</h2>
            <h4 class="neutral-text" data-paragraph>
              Check out some of the case studies related to this capability.
            </h4>
          </div>
          <div v-if="showControls" class="c-slider-controls mobile-hide">
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
    <div class="l-container">
      <div
        ref="csSlider"
        class="c-casestudy__wrapper related"
        :class="caseStudyLength <= 2 ? 'even' : ''"
        @scroll="checkScroll">
        <slot name="casestudies" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      caseStudyLength: 0,
      hasScrolled: false,
      doneScrolling: false,
      showControls: false
    }
  },

  computed: {},

  mounted() {
    this.getCasestudyLength()
  },

  methods: {
    checkControls() {
      if (
        this.caseStudyLength > 3 ||
        this.$refs.csSlider.offsetWidth < this.$refs.csSlider.scrollWidth
      ) {
        this.showControls = true
      } else {
        this.showControls = false
      }
    },

    getCasestudyLength() {
      this.caseStudyLength = document.querySelectorAll('.c-casestudy').length
      this.checkControls()
    },

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
.c-casestudy__wrapper.related {
  flex-wrap: nowrap;
  overflow: scroll;
  pointer-events: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  max-width: 1550px;
  margin-left: auto;
  margin-right: auto;
}
.c-casestudy {
  pointer-events: auto;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
}
.c-casestudy__wrapper.related::-webkit-scrollbar {
  display: none;
}
.c-slider-control__btn {
  pointer-events: auto;
}
.c-slider-control__btn.is-disabled {
  pointer-events: none;
}
</style>
