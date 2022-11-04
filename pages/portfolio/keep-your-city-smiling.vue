<template>
  <div>
    <Header is-inverted />

    <div class="scroller">
      <casestudy-header
        hero-img="/assets/images/kycs-header.jpg"
        logo="/assets/images/k.png">
        <template #title> Keep Your City Smiling </template>
        <template #caption> The Big Pivot</template>
        <template #catchphrase> Helping People, Help People. </template>
        <template #description>
          Sam and Joe Eitzen, brothers and co-founders of Snapbar, a photo booth
          rental company, watched 90% of their projected 2020 revenue disappear
          overnight. It was April. The pandemic was in full swing. Snapbar
          events were being canceled left and right. The Eitzens had to act
          fast, they had a company to save. Not to mention over 50 people to
          keep employed. With a 180-degree pivot, Keep Your City Smiling was
          born. Picture this: Gift boxes filled with high-quality products
          sourced from small local businesses. A novel concept that could help
          keep local business afloat and the Snapbar staff employed in a
          critical time.
          <br />
          <br />
          We came across the Eitzen's story on LinkedIn. We knew we had to do
          our part. So we offered to set up an e-commerce campaign on Facebook
          and Instagram, free of charge. The campaign exceeded everyone's
          wildest expectations.
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
              icon="/assets/images/fb-ad.svg"
              link="/capabilities/fb-ads">
              <template #service> Facebook &amp; Instagram Ads </template>
              <template #service-details>
                Ad creation/distribution, copywriting, creative testing, and
                insightful reporting.
              </template>
            </service-block>
          </div>
        </div>

        <casestudy-metrics>
          <template #header>3-month campaign results </template>

          <template #metrics>
            <metric-item>
              <template #figure>1,000+</template>
              <template #description> boxes sold </template>
            </metric-item>

            <metric-item>
              <template #figure>$60K</template>
              <template #description> revenue returned </template>
            </metric-item>

            <metric-item>
              <template #figure>5.88x </template>
              <template #description> return on investment </template>
            </metric-item>
          </template>
        </casestudy-metrics>

        <div class="c-work__writeup">
          <div class="l-container">
            <div class="c-writeup__inner">
              <div>
                <!-- <h2 class="alt-h2 no-margin" data-paragraph>The Product</h2> -->
                <div class="c-writeup">
                  <h5 class="neutral-text" data-paragraph>
                    It didn't just stop there, rapid e-commerce growth allowed
                    The Eitzens and Keep Your City Smiling to expand the idea
                    outside of Seattle. They partnered with more small
                    businesses, creating locally-themed gift boxes for New York
                    City, Los Angeles, and the greater West Coast.

                    <br />
                    <br />
                    Since we partnered with Keep Your City Smiling, their gift
                    box idea has gone Corporate in a big, big way. Companies
                    like Amazon, Microsoft, and Tableau have placed large
                    orders, delighting their teams with locally-sourced products
                    (and delighting the small businesses featured in those boxes
                    as well 😉).
                  </h5>
                </div>
              </div>
              <!-- <div class="c-writeup-img__block">
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
              <template #figure>113,740</template>
              <template #description>website views</template>
            </metric-item>

            <metric-item small>
              <template #figure>3.9M</template>
              <template #description>ad reach</template>
            </metric-item>

            <metric-item small>
              <template #figure>16.3M</template>
              <template #description>ad impressions</template>
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
                img-src="/assets/images/ombraz-thumb.jpg"
                link="/portfolio/ombraz-sunglasses">
                <template #casestudy-name> Ombraz Sunglasses </template>
                <template #featured-summary> 3.7x Return on Ad Spend </template>
                <template #casestudy-details>
                  3.7x Return on Ad Spend
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
      return 'Keep Your City Smiling | NectrSocial'
    }
  },

  mounted() {
    this.$initScroll('.scroller')
    this.$paragraph()
  }
}
</script>

<style>
.c-work__logo {
  max-height: none;
}
</style>
