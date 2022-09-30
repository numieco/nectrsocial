<template>
  <div>
    <Header is-inverted />

    <div class="scroller">
      <casestudy-header
        hero-img="/assets/images/qnightclub.jpg"
        logo="/assets/images/duécucina.png">
        <template #title> Due' Cucina Italiana </template>
        <template #caption> Italian Resturaunt Group </template>
        <template #catchphrase> Authentically Italian </template>
        <template #description>
          Due Cucina didn’t want to simply throw pretty food pictures on
          Instagram and call it a day, they have a uniquely playful personality
          and wanted it to shine through in the most authentic way possible.
          After all, in today's day authenticity on social media is paramount.
          It’s what cuts through the clutter, and creates a genuine following.
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
              icon="/assets/images/goggle-ads.svg"
              link="/capabilities/googleads">
              <template #service> Google Ads </template>
              <template #service-details>
                Show up where people are searching.
              </template>
            </service-block>

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
          </div>
        </div>

        <casestudy-metrics>
          <template #header>So far in 2022</template>

          <template #metrics>
            <metric-item>
              <template #figure>26,000</template>
              <template #description>
                new social media followers (~150 per day)
              </template>
            </metric-item>

            <metric-item>
              <template #figure>500,000+</template>
              <template #description>TikTok and Reel views</template>
            </metric-item>

            <metric-item>
              <template #figure>10</template>
              <template #description>collabs with local influencers </template>
            </metric-item>
          </template>
        </casestudy-metrics>

        <div class="c-work__writeup">
          <div class="l-container">
            <div class="c-writeup__inner">
              <div>
                <h2 class="alt-h2 no-margin" data-paragraph>The Work</h2>
                <div class="c-writeup">
                  <h5 class="neutral-text" data-paragraph>
                    We knew that in order to build an authentic presence for
                    Due, we had to be more than just an outside services
                    provider. We had to physically immerse our team in their
                    restaurants, spend time with the owners, taste the product,
                    learn a smidge of Italian, listen to their customers, taste
                    the product again, etc.
                    <br />
                    <br />
                    We help the brand to be authentically itself, and Due’
                    Cucina’s social presence is just that. Every couple of weeks
                    you’ll find a member of our team shooting videos and photos
                    in one of their restaurants. Our team creates and posts all
                    social media content for Due Cucina, publishing new content
                    5 times per week.
                  </h5>
                </div>
              </div>
              <!--    <div class="c-writeup-img__block">
                <img
                  alt=""
                  class="c-writeup__img"
                  loading="lazy"
                  src="/assets/images/work-img.jpg"/>
              </div> -->
            </div>
          </div>
        </div>

        <!-- <casestudy-metrics>
          <template #metrics>
            <metric-item small>
              <template #figure>10,111</template>
              <template #description>new followers (~30 per day)</template>
            </metric-item>

            <metric-item small>
              <template #figure>1.1M+</template>
              <template #description>users reached organically</template>
            </metric-item>

            <metric-item small>
              <template #figure>100%</template>
              <template #description>increase in engagement</template>
            </metric-item>
          </template>
        </casestudy-metrics> -->

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
                img-src="/assets/images/Salish-Bath.jpg"
                link="/portfolio/salish-lodge">
                <template #casestudy-name> Salish Lodge </template>
                <template #featured-summary> Rebuilding Post-Pandemic</template>
                <template #casestudy-details>
                  Rebuilding Post-Pandemic
                </template>
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
      return "Due' Cucina Italiana  | NectrSocial"
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
