<template>
  <div class="l-section no-padding">
    <div class="l-section__header">
      <div class="l-container">
        <div class="c-section-header">
          <div>
            <h2 data-paragraph>Words of Validation</h2>
            <h4 class="neutral-text" data-paragraph>
              Here's what our clients have to say!
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

    <div ref="tesSlider" class="c-slider testimonial-slider dragscroll" @scroll="checkScroll">
      <testimonial logo="/assets/images/kirkland-urban.png">
        <template #content>
          The Nectr team has completely transformed our social media presence for the better. The Nectr team is always
          bringing new and innovative approaches to achieve our goals, and because of them we have an engaged and
          growing following. Can't recommend them enough.
        </template>
        <template #name>Tabitha Mars</template>
        <template #role>Kirkland Urban</template>
        <template #company></template>
      </testimonial>
      <testimonial black logo="/assets/images/gramercy.jpg">
        <template #content>
          Nectr is incredible! If you are looking for help growing your social media following and creating content with
          your voice, they are the team to help with your vision! We have worked with Nectr for years and are so happy
          with the growth of our platforms. The team is kind, hard-working, fun, and engaging, and I actually really
          looked forward to our meetings! I’m so glad we were pointed in their direction and am here to continue that
          kindness. I couldn’t recommend them more highly.
        </template>
        <template #name>Nichole Bigley</template>
        <template #role>Gramercy Cellars</template>
        <template #company></template>
      </testimonial>
      <testimonial logo="/assets/images/PSH.png">
        <template #content>
          I am grateful to have gotten to work with such a professional, thoughtful team. They produced impressive
          numbers and
          results based on our internal goals and gave guidance in a professional, yet genuine manner. Nectr is a
          fantastic team
          of great people and I'd confidently recommend them to any business or organization.
        </template>
        <template #name>Tabitha Mars</template>
        <template #role>Pasados Safe Haven</template>
        <template #company></template>
      </testimonial>
      <testimonial black logo="/assets/images/ventrk-logo-fill.jpg">
        <template #content>
          If you are looking to drive results for your business or brand and
          work with an incredible team, Nectr is the move!
        </template>
        <template #name>Jarid Adams</template>
        <template #role>CBO,</template>
        <template #company>Ventrk</template>
      </testimonial>

      <testimonial logo="/assets/images/cindy-talks.jpeg">
        <template #content>
          Nectr social has helped me launch two businesses successfully. They
          are professional and informed about getting the desired results you
          want. They shine when it comes to communication and end results. I’d
          highly recommend!
        </template>
        <template #name>Cindy Benezra</template>
        <template #role>Owner,</template>
        <template #company>Elite Events & CindyTalks</template>
      </testimonial>

      <testimonial black logo="/assets/images/sbl-logo.png">
        <template #content>
          Nectr fixed my google ads account it was performing horrible until he
          worked his magic. Thanks for your help . Recommend 10/10
        </template>
        <template #name>Rose Meza</template>
        <template #role>Owner,</template>
        <template #company>Sugar Blossom Lashes</template>
      </testimonial>

      <testimonial logo="/assets/images/donponcho.png" small>
        <template #content>
          Nectr is great to work with. They were a perfect fit for us as we
          built out our marketing strategy and social media presence. They help
          us to achieve our vision with brilliant creative content. Easy to work
          with, and highly recommended.
        </template>
        <template #name>Linda Reidman</template>
        <template #role>Client Representative,</template>
        <template #company>Don Pancho</template>
      </testimonial>

      <testimonial black logo="/assets/images/salish.png" small>
        <template #content>
          They’re incredibly easy to work with, have excellent communication
          skills and are very receptive to any feedback or changes requested. We
          achieved great results, not only an increase in followers and exposure
          on our social platforms but also with our conversion rates on the paid
          side. Zak and the team are truly wonderful.
        </template>
        <template #name>Rebecca Mackay</template>
        <template #role>Marketing Manager (former),</template>
        <template #company>Salish Lodge & Spa</template>
      </testimonial>

      <testimonial logo="/assets/images/downtown.png">
        <template #content>
          Nectr is great to work with. They were a perfect fit for us as we
          built out our marketing strategy and social media presence. They help
          us to achieve our vision with brilliant creative content. Easy to work
          with, and highly recommended.
        </template>
        <template #name>Marques Warren</template>
        <template #role>CEO,</template>
        <template #company>Downtown Spirits</template>
      </testimonial>

      <testimonial black logo="/assets/images/marika-smiley.png">
        <template #content>
          The team at Nectr has been an incredible partner in strategy and
          campaign management for myself and my clients. They are thoughtful and
          results-driven, and I would highly recommend their services!
        </template>
        <template #name>Marika Beroukas</template>
        <template #role>Founder,</template>
        <template #company>Marika Beroukas</template>
      </testimonial>

      <testimonial logo="/assets/images/ably-logo.png">
        <template #content>
          We&#x27;ve been working with Nectr Social and its principals for 3
          years now, and we could not be more pleased. Nectr is clearly the #1
          social agency in Seattle, and quite possibly well beyond.
        </template>
        <template #name>Bobby Frank</template>
        <template #role>COO,</template>
        <template #company>Ably Apparel</template>
      </testimonial>

      <testimonial black logo="/assets/images/testimonial-img-2.png">
        <template #content>
          Working with Nectr Social meant less stress for our team! They were
          responsive and reliable, and flexed to fit our ever-changing needs.
        </template>
        <template #name>Liza Sankar-Gorton</template>
        <template #role>Social Media Strategist,</template>
        <template #company>Green Rubino</template>
      </testimonial>

      <testimonial logo="/assets/images/testimonial-img-1.png">
        <template #content>
          In 3 months, our overall return on ad spend has doubled. Since then
          we&#x27;ve continued to scale our ad spend at profit. Communication is
          always great and the results speak for themselves.
        </template>
        <template #name>Jensen Brehm</template>
        <template #role>Co-founder,</template>
        <template #company>Ombraz Sunglasses</template>
      </testimonial>

      <div class="dummy-block"></div>
    </div>

    <div class="c-slider-controls desktop-hide">
      <div class="c-slider-control__btn slider-prev" :class="hasScrolled ? '' : 'is-disabled'" @click="scrollLeft">
        <div class="btn-dot"></div>
        <div>Previous</div>
      </div>
      <div class="c-slider-control__btn slider-next" :class="doneScrolling ? 'is-disabled' : ''" @click="scrollRight">
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
@media screen and (max-width: 767px) {
  .testimonial-slider {
    pointer-events: all;
  }
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
