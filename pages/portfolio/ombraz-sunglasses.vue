<template>
  <div>
    <Header is-inverted />

    <div class="scroller">
      <casestudy-header
        hero-img="/assets/images/casestudy-img-3.jpg"
        logo="/assets/images/ombraz.png">
        <template #title> Ombraz </template>
        <template #caption> 3.5x Return on Ad Spend </template>
        <template #catchphrase>
          Modern Shades Generate A Cool Return.
        </template>
        <template #description>
          In March 2018, Nectr teamed up with Ombraz Sunglasses to put their
          unbreakable, undroppable sunglasses on the map with a 30-day
          Facebook-fueled crowdfunding campaign. With our help, Ombraz secured
          their funding eight hours after launch, surpassing their initial goal
          of $20,000 with $163,000 in final pledges.
          <br />
          <br />
          For this campaign, Nectr was tasked with managing a reserved social
          media ad budget. Through creative testing and measured audience
          building, we were able to deploy a comprehensive revenue-generating
          funnel and provide an exponential return on investment.
          <br />
          <br />
          Since joining forces with Ombraz, our team has been able to profitably
          scale their monthly social advertising spend by 16x. To see the full
          outline of our process and results, swoop down below.
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
          <template #header>12-Month Results (2020) </template>

          <template #metrics>
            <metric-item>
              <template #figure>370%</template>
              <template #description> return on ad spend </template>
            </metric-item>

            <metric-item>
              <template #figure>2,910</template>
              <template #description> shades sold </template>
            </metric-item>

            <metric-item>
              <template #figure>$371,300</template>
              <template #description> returned in revenue </template>
            </metric-item>
          </template>
        </casestudy-metrics>

        <div class="c-work__writeup">
          <div class="l-container">
            <div class="c-writeup__inner">
              <div>
                <h2 class="alt-h2 no-margin" data-paragraph>The Product</h2>
                <div class="c-writeup">
                  <h5 class="neutral-text" data-paragraph>
                    Ombraz (ohm-bruz) shades are a fresh take on a classic
                    accessory. Defined by a durable, comfortable, and ultimately
                    more practical sunglasses design, they do away with side
                    arms, screws, and hinges, replacing it all with a simple,
                    adjustable cord. The end result is an easy-shipping,
                    near-indestructible package that just so happens to look
                    good, too.
                    <br />
                    <br />
                    When we tried Ombraz, it was love at first sight. We knew
                    right then we had to be a part of their movement.
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
                img-src="/assets/images/casestudy-img-6.jpg"
                link="/portfolio/ably">
                <template #casestudy-name> Ably </template>
                <template #featured-summary>
                  From 0 to 40k Instagram Followers
                </template>
                <template #casestudy-details>
                  From 0 to 40k Instagram Followers
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
      return 'Ombraz Sunglasses | NectrSocial'
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
