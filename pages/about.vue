<template>
  <div>
    <Header is-inverted />

    <div class="scroller">
      <div class="l-section hero-section about-page">
        <div class="l-container">
          <div class="about-text__wrapper">
            <h1 class="about-hero__text" data-paragraph>
              We get it done with purpose, and without the high price tag.
            </h1>
            <h3 class="neutral-text" data-paragraph>
              Living and breathing social since 2018.
            </h3>
            <div class="logo-icon yellow large"></div>
          </div>
        </div>
      </div>

      <div class="l-section">
        <div class="l-container">
          <div class="c-team__flex">
            <div class="team-photo__wrapper">
              <div class="c-block__double orange"></div>
              <div class="team-img__block">
                <img
                  class="team-img"
                  loading="lazy"
                  src="/assets/images/nectr-team.png"/>
              </div>
            </div>
            <div class="team-bio__wrapper">
              <h2 data-paragraph>
                What makes us <span class="orange-text">different?</span>
              </h2>
              <h5 class="neutral-text" data-paragraph>
                Nectr is a powerhouse team of young professionals that speak
                fluent social media. Combined, we have nearly three decades of
                social media experience and 15 years of agency experience.
                <br />
                <br />
                Our agency approach is boutique and high touch. When you engage
                us, you receive a one-of-a-kind experience. A group of
                professionals fully dedicated to your success on a daily basis.
                We don’t use a rinse and repeat process, we listen, we observe,
                and we design a unique path to your success.
                <br />
                <br />
                The key to success on social begins and ends with the A word…
                ‘Authenticity’
              </h5>
            </div>
          </div>
        </div>
      </div>

      <!-- Done -->
      <div class="l-section team-section">
        <div class="l-section__header no-padding">
          <div class="l-container">
            <div class="c-section-header">
              <div class="header-text__wrapper">
                <h2 data-paragraph>Meet the Charm</h2>
                <h4 class="neutral-text" data-paragraph>
                  When hummingbirds move together, they are dubbed a charm. They
                  fly together when they need to get things done, like pollinate
                  a field of wildflowers, or crush social media.
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div class="l-container">
          <div class="c-team__wrapper">
            <team-member
              img-src-one="/assets/images/Zak-img.jpg"
              img-src-two="/assets/images/Zak-hover.jpg">
              <template #name> Zak Kosher </template>
              <template #role> Founder </template>
            </team-member>

            <team-member
              img-src-one="/assets/images/Dylan.jpg"
              img-src-two="/assets/images/dylan-hover.jpg">
              <template #name> Dylan Rabinowitz </template>
              <template #role> Director Of Client Services </template>
            </team-member>

            <team-member
              img-src-one="/assets/images/Kortney1.jpg"
              img-src-two="/assets/images/Kortney2-hover.jpg">
              <template #name> Kortney Gloska </template>
              <template #role> Creative Director </template>
            </team-member>

            <!--    <team-member
              img-src-one="/assets/images/Jon-01.jpg"
              img-src-two="/assets/images/Jon-hover.jpg">
              <template #name> Jonathan Ochoa </template>
              <template #role> Social Media Manager </template>
            </team-member> -->

            <team-member
              img-src-one="/assets/images/Gianna 01.jpg"
              img-src-two="/assets/images/Gianna-hover.jpg">
              <template #name> Gianna Chen </template>
              <template #role> Social Media Manager </template>
            </team-member>

            <team-member
              img-src-one="/assets/images/Tiare1.jpg"
              img-src-two="/assets/images/Tiare-hover.jpg">
              <template #name> Tiare Bowman </template>
              <template #role> Social Media Manager </template>
            </team-member>

            <team-member
              img-src-one="/assets/images/Ashley 01.jpg"
              img-src-two="/assets/images/Ashley-hover.jpg">
              <template #name> Ashley Forst </template>
              <template #role> Social Media Manager </template>
            </team-member>

            <team-member
              img-src-one="/assets/images/Appa 02.jpg"
              img-src-two="/assets/images/Appa-hover.jpg">
              <template #name> Apa </template>
              <template #role> Dylan's Dog </template>
            </team-member>
          </div>
        </div>
      </div>

      <!-- Done -->
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
      return 'About | NectrSocial'
    }
  },

  mounted() {
    // eslint-disable-next-line no-new
    new this.$pageAnimation('.scroller')
  }
}
</script>

<style>
.team-img__block > img {
  object-fit: cover;
  object-position: top;
}
</style>
