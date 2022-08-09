<template>
  <div class="l-section no-padding">
    <div class="l-section__header">
      <div class="l-container">
        <div class="c-section-header">
          <div>
            <h2 data-paragraph>Words of Validation</h2>
            <h4 class="neutral-text" data-paragraph>
              Here’s what some of the amazing clients we’ve worked with have to
              say!
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
      ref="tesSlider"
      class="c-slider testimonial-slider"
      @scroll="checkScroll">
      <testimonial logo="/assets/images/testimonial-img-1.png">
        <template #content>
          In 3 months, our overall return on ad spend has doubled. Since then
          we&#x27;ve continued to scale our ad spend at profit. Communication is
          always great and the results speak for themselves.
        </template>
        <template #name> Jensen Brehm </template>
        <template #role> Co-founder </template>
        <template #company> Ombraz Sunglasses </template>
      </testimonial>

      <testimonial black logo="/assets/images/testimonial-img-2.png">
        <template #content>
          Working with Nectr Social meant less stress for our team! They were
          responsive and reliable, and flexed to fit our ever-changing needs.
        </template>
        <template #name> Liza Sankar-Gorton </template>
        <template #role> Social Media Strategist </template>
        <template #company> Green Rubino </template>
      </testimonial>

      <testimonial logo="/assets/images/ably-logo.png">
        <template #content>
          We&#x27;ve been working with Nectr Social and its principals for 3
          years now, and we could not be more pleased. Nectr is clearly the #1
          social agency in Seattle, and quite possibly well beyond.
        </template>
        <template #name> Bobby Frank </template>
        <template #role> COO </template>
        <template #company> Ably Apparel </template>
      </testimonial>

      <testimonial black logo="/assets/images/placeholder.svg">
        <template #content>
          The team at Nectr has been an incredible partner in strategy and
          campaign management for myself and my clients. They are thoughtful and
          results-driven, and I would highly recommend their services!
        </template>
        <template #name> Marika Beroukas </template>
        <template #role> Founder </template>
        <template #company> Marika Beroukas </template>
      </testimonial>

      <div class="dummy-block"></div>
    </div>

    <div class="c-slider-controls desktop-hide">
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

    <div class="c-slider-progress">
      <div class="c-slider-progress_bar">
        <div ref="progress" class="c-slider-progress__inner"></div>
      </div>
    </div>
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
    this.progressBar()
  },

  methods: {
    checkScroll() {
      if (this.$refs.tesSlider.scrollLeft > 0) {
        this.hasScrolled = true
      } else this.hasScrolled = false
      this.progressBar()

      if (
        this.$refs.tesSlider.offsetWidth + this.$refs.tesSlider.scrollLeft >=
        this.$refs.tesSlider.scrollWidth
      ) {
        this.doneScrolling = true
      } else this.doneScrolling = false
      this.progressBar()
    },

    scrollRight() {
      const testimonial = document.querySelector('.c-testimonial')
      const testimonialWidth = testimonial.clientWidth + 44
      this.$slideRight(this.$refs.tesSlider, testimonialWidth)
    },

    scrollLeft() {
      const testimonial = document.querySelector('.c-testimonial')
      const testimonialWidth = testimonial.clientWidth + 44
      this.$slideLeft(this.$refs.tesSlider, testimonialWidth)
    },

    progressBar() {
      // eslint-disable-next-line prefer-const
      let percent =
        ((this.$refs.tesSlider.offsetWidth + this.$refs.tesSlider.scrollLeft) /
          this.$refs.tesSlider.scrollWidth) *
          100 +
        '%'

      this.$refs.progress.style.width = percent
    }
  }
}
</script>

<style scoped>
.testimonial-slider {
  pointer-events: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  max-width: 1550px;
  margin-left: auto;
  margin-right: auto;
}
.c-testimonial {
  pointer-events: auto;
}
.testimonial-slider::-webkit-scrollbar {
  display: none;
}
.c-slider-control__btn {
  pointer-events: auto;
}
.c-slider-control__btn.is-disabled {
  pointer-events: none;
}
.dummy-block {
  flex: 0 0 auto;
  width: 1px;
}
</style>
