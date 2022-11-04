<template>
  <div>
    <Header is-inverted />

    <div class="scroller">
      <casestudy-header
        hero-img="/assets/images/salish-header.jpeg"
        logo="/assets/images/SalishLogoBlack.png">
        <template #title> Salish Lodge & Spa </template>
        <template #caption> Destination Hotel in Snoqualmie, WA </template>
        <template #catchphrase> Rebuilding Post-Pandemic </template>
        <template #description>
          2020 was a devastating year for the hotel industry. Covid brought
          travel to a screeching halt, and jobs and revenue were lost. As the
          year came to an end, there were glimpses of hope that the world as we
          once knew it would return.
          <br />
          <br />
          Our team developed an organic + paid social media strategy that would
          help Salish rebound to pre-pandemic numbers, skyrocketing occupancy
          rates and average stay duration to the highest it's been in years.
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
          <template #header>Social Media Created:</template>

          <template #metrics>
            <metric-item>
              <template #figure>1,917</template>
              <template #description>
                unique stays at Salish Lodge & Spa
              </template>
            </metric-item>

            <metric-item>
              <template #figure>$1M</template>
              <template #description>in booking revenue</template>
            </metric-item>

            <metric-item>
              <template #figure>2,150%</template>
              <template #description>return on advertising spend</template>
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
                    The Nectr team implemented a seamless prospecting and
                    retargeting advertising strategy that uses Google, Facebook,
                    and Instagram ad placements. Our two-pronged method
                    initially captures users searching relevant keywords on
                    Google and then follows with targeted social media ads based
                    on their interaction with the website, converting interest
                    to revenue.
                    <br />
                    <br />
                    Our team was also tasked with building Salish Lodge & Spa’s
                    organic social media communities. We steer the visual
                    narrative by developing all social content, captioning and
                    posting 3-4 times per week, creating Instagram Reels, and
                    managing the social communities.
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

        <casestudy-metrics>
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
        </casestudy-metrics>

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
                img-src="/assets/images/kycs-thumb.jpeg"
                link="/portfolio/keep-your-city-smiling">
                <template #casestudy-name> KYCS </template>
                <template #featured-summary> The Big Pivot </template>
                <template #casestudy-details> The Big Pivot </template>
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
      return 'Salish Logde & Spa | NectrSocial'
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
