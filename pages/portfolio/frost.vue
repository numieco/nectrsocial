<template>
  <div>
    <Header is-inverted />

    <div class="scroller">
      <casestudy-header hero-img="/assets/images/frost-thumb.jpg" logo="/assets/images/frost.png">
        <template #title> Frost </template>
        <template #caption> Driving Foot Traffic </template>
        <template #catchphrase> Foot Traffic Couldn't Be Sweeter. </template>
        <template #description>
          Nectr linked up with FROST to drive foot traffic to their physical
          stores using Facebook & Instagram lead form ads. Nectr managed an
          ongoing social media ad budget, testing various audiences and creative
          combinations. We delivered pinpointed messaging to users within a
          radius around FROST locations, sending coupons only redeemable
          in-store
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
            <service-block icon="/assets/images/fb-ad.svg" link="/capabilities/meta-ads">
              <template #service> Meta Ads </template>
              <template #service-details>
                Ad creation/distribution, copywriting, creative testing, and
                insightful reporting.
              </template>
            </service-block>
          </div>
        </div>

        <casestudy-metrics>
          <template #metrics>
            <metric-item>
              <template #figure>60K</template>
              <template #description> users reached </template>
            </metric-item>

            <metric-item>
              <template #figure>895</template>
              <template #description> coupons requested </template>
            </metric-item>

            <metric-item>
              <template #figure>13%</template>
              <template #description> in-store conversion rate </template>
            </metric-item>
          </template>
        </casestudy-metrics>

        <div class="c-work__writeup">
          <div class="l-container">
            <div class="c-writeup__inner">
              <div>
                <!-- <h2 class="alt-h2 no-margin" data-paragraph>The Product</h2> -->
                <div class="c-writeup">
                  <h3 class="alt-h3" data-paragraph>Step 1</h3>
                  <h5 class="neutral-text" data-paragraph>
                    Social media advertisement featuring coupon details and some
                    tasty creative is served to Facebook & Instagram users
                    within 20-mile radius around Frost's Everett location.
                  </h5>
                  <br />
                  <h3 class="alt-h3" data-paragraph>Step 2</h3>
                  <h5 class="neutral-text" data-paragraph>
                    After the 'Get Offer' button is clicked, a lead form
                    appears. This screen prompts the beginning of the lead form
                    experience.
                  </h5>
                  <br />
                  <h3 class="alt-h3" data-paragraph>Step 3</h3>
                  <h5 class="neutral-text" data-paragraph>
                    Form asks user for their first name and email address in
                    exchange for their coupon. Adding a mild data capture allows
                    us to get more precise and cost effective with future
                    advertising.
                  </h5>
                  <br />
                  <h3 class="alt-h3" data-paragraph>Step 4</h3>
                  <h5 class="neutral-text" data-paragraph>
                    After a user submits their information, the requested coupon
                    is automatically sent to their email inbox within seconds.
                    In-store redemption was tracked using Frost's POS (Point of
                    Sale) system.
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

        <c-button btn-text="Get in Touch!" centered typeform />
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
              <casestudy featured img-src="/assets/images/due-thumb.jpg" link="/portfolio/duecucina">
                <template #casestudy-name> Due' Cucina </template>
                <template #featured-summary> Authentically Italian </template>
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
        lang: 'en',
      },
      title: this.title,
      meta: [...this.meta],
    }
  },

  computed: {
    meta() {
      return this.mxMetaUtils({
        title: this.title,
        description: this.description,
      })
    },

    description() {
      return ''
    },

    title() {
      return 'Frost Desserts | NectrSocial'
    },
  },

  mounted() {
    this.$initScroll('.scroller')
    this.$paragraph()
  },
}
</script>

<style>
.c-work__logo {
  max-height: none;
}
</style>
