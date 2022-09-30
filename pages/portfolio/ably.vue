<template>
  <div>
    <Header is-inverted />

    <div class="scroller">
      <casestudy-header
        hero-img="/assets/images/casestudy-img-6.jpg"
        logo="/assets/images/ably-logo.png">
        <template #title> Ably </template>
        <template #caption> From 0 to 40k Instagram Followers </template>
        <template #catchphrase>
          #WhateverProof Clothing Finds Its Following.
        </template>
        <template #description>
          Much like Rome, dedicated Instagram followings aren’t built in a day;
          they come together piece by piece, interaction by interaction to form
          communities that are so much more than a follower count.
          <br />
          <br />
          Forward-thinking Ably Apparel was tired of all the smoke and mirrors
          and empty numbers. They wanted something substantial. We were happy to
          oblige.
        </template>
      </casestudy-header>

      <div class="l-section no-padding">
        <div class="c-work-services">
          <div class="c-services__header">
            <h2 data-paragraph>Services Provided</h2>
            <h4 class="neutral-text" data-paragraph>
              These are the services that were used in this project.
            </h4>
          </div>

          <div class="c-services__wrapper">
            <service-block
              icon="/assets/images/social-media.svg"
              link="/capabilities/social-media-management">
              <template #service> Social Media Management (Organic) </template>
              <template #service-details>
                Hand us the keys to your social channels. Complete, done-for-you
                social media management solutions with growth strategies baked
                in.
              </template>
            </service-block>

            <service-block
              icon="/assets/images/pv.svg"
              link="/capabilities/photo-video">
              <template #service> Photo &amp; Video </template>
              <template #service-details>
                Just the creative, nothing else. We'll send you photos, videos,
                or both featuring your product, brand, or service in its finest
                moments.
              </template>
            </service-block>
          </div>
        </div>

        <casestudy-metrics>
          <template #header>Instagram Metrics </template>

          <template #metrics>
            <metric-item>
              <template #figure>40,400</template>
              <template #description> total followers </template>
            </metric-item>

            <metric-item>
              <template #figure>2,500+</template>
              <template #description> avg likes per post</template>
            </metric-item>

            <metric-item>
              <template #figure>18.6M</template>
              <template #description> impressions </template>
            </metric-item>
          </template>
        </casestudy-metrics>

        <div class="c-work__writeup">
          <div class="l-container">
            <div class="c-writeup__inner">
              <div>
                <h2 class="alt-h2 no-margin" data-paragraph>Influencers</h2>
                <div class="c-writeup">
                  <h5 class="neutral-text" data-paragraph>
                    Nectr is lucky enough to know some pretty cool humans. We
                    tapped into our influencer network of impactful individuals
                    to help spread the good word about Ably. With the help of
                    the personalities below—and many others—we were able to
                    connect with each of their individual communities and shout
                    our client’s name from the digital mountaintops.
                    <br />
                    <br />
                    When we tried Ombraz, it was love at first sight. We knew
                    right then we had to be a part of their movement.
                  </h5>
                </div>
              </div>
              <!--   <div class="c-writeup-img__block">
                <img
                  alt=""
                  class="c-writeup__img"
                  loading="lazy"
                  src="/assets/images/work-img.jpg"/>
              </div> -->
            </div>
          </div>
        </div>

        <c-button btn-text="Book a Discovery call!" centered typeform />
      </div>

      <div class="l-section">
        <div class="l-section__header no-padding">
          <div class="l-container">
            <div class="c-section-header">
              <div>
                <h2 class="no-margin" data-paragraph>
                  Check out another project
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div class="c-casestudies">
          <div class="l-container">
            <div class="c-casestudy__wrapper">
              <casestudy
                featured
                img-src="/assets/images/qnight-thumb.jpg"
                link="/portfolio/qnightclub">
                <template #casestudy-name> QNightClub </template>
                <template #featured-summary> Sold Out Shows </template>
                <template #casestudy-details> Sold Out Shows </template>
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
      return 'Ably Apparel | NectrSocial'
    }
  },

  mounted() {
    // eslint-disable-next-line no-new
    new this.$pageAnimation('.scroller')
  }
}
</script>

<style>
.c-work__logo {
  max-height: none;
}
</style>
