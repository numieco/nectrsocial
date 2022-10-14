<template>
  <div>
    <Header is-inverted />

    <div class="scroller">
      <div class="l-section first-section">
        <div class="l-section__header no-padding">
          <div class="l-container">
            <div class="c-section-header">
              <div>
                <h2 class="section-header__text" data-paragraph>Our Work</h2>
                <h4 class="section-header__subtext" data-paragraph>
                  Here are some select case studies from proud moments.
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div class="c-casestudies">
          <div class="l-container">
            <div class="c-casestudy__wrapper">
              <casestudy
                featured
                img-src="/assets/images/Salish-Bath.jpg"
                link="/portfolio/salish-lodge">
                <template #casestudy-name> Salish Lodge </template>
                <template #featured-summary>
                  Rebuilding Post-Pandemic
                </template>
                <template #casestudy-details>
                  Rebuilding Post-Pandemic
                </template>
              </casestudy>

              <casestudy
                img-src="/assets/images/casestudy-img-2.jpg"
                link="/portfolio/keep-your-city-smiling">
                <template #casestudy-name> KYCS </template>
                <template #casestudy-details> The Big Pivot </template>
              </casestudy>

              <casestudy
                img-src="/assets/images/casestudy-img-3.jpg"
                link="/portfolio/ombraz-sunglasses">
                <template #casestudy-name> Ombraz Sunglasses </template>
                <template #casestudy-details>
                  3.5x Return on Ad Spend
                </template>
              </casestudy>

              <casestudy
                img-src="/assets/images/casestudy-img-6.jpg"
                link="/portfolio/ably">
                <template #casestudy-name> Ably </template>
                <template #casestudy-details>
                  0 to 40k Instagram Followers
                </template>
              </casestudy>

              <casestudy
                img-src="/assets/images/qnight-thumb.jpg"
                link="/portfolio/qnightclub">
                <template #casestudy-name> QNightClub </template>
                <template #casestudy-details> Sold Out Shows </template>
              </casestudy>

              <casestudy
                img-src="/assets/images/frost-thumb.jpg"
                link="/portfolio/frost">
                <template #casestudy-name> Frost </template>
                <template #casestudy-details> Driving Foot Traffic </template>
              </casestudy>

              <casestudy
                img-src="/assets/images/Due.jpg"
                link="/portfolio/duecucina">
                <template #casestudy-name> Due' Cucina </template>
                <template #casestudy-details> Authentically Italian </template>
              </casestudy>
            </div>
          </div>
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
      return 'Our Portfolio | NectrSocial'
    }
  },

  mounted() {
    // eslint-disable-next-line no-new
    new this.$pageAnimation('.scroller')
  }
}
</script>
