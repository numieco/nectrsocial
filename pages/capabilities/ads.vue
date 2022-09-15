<template>
  <div>
    <Header blue-bg />

    <div class="scroller">
      <service-header>
        <template #title> Ad Management </template>
        <template #description>
          Ensure that your Facebook & Instagram advertising campaigns are built
          for juicy returns in 2022.
        </template>
      </service-header>

      <div class="l-section">
        <div class="c-capabilities__wrapper">
          <div class="logo-icon yellow large"></div>

          <h4 class="capability-hero__subtext" data-paragraph>
            We’ve gained plenty of insight through the years, managing an
            advertising portfolio of over $5M on behalf of our clients. The
            biggest takeaway: the digital advertising landscape is in constant
            flux. The algorithms seem to favor something new every day.
          </h4>

          <service-list>
            <template #list-header>Setup </template>
            <template #list-block>
              <service-list-item>
                <template #list-text>
                  Ad Account & Business Manager configuration
                </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  Meta Pixel, TikTok Pixel, Google conversion tracking setup
                </template>
              </service-list-item>
              <service-list-item>
                <template #list-text> IOS Privacy compliance </template>
              </service-list-item>
              <service-list-item>
                <template #list-text> Tracking & attribution </template>
              </service-list-item>
            </template>
          </service-list>

          <service-list>
            <template #list-header>Create </template>
            <template #list-block>
              <service-list-item>
                <template #list-text>
                  Ad caption, headline, and media creation (testing multiple of
                  each)
                </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  Media buying strategy and campaign builds
                </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  Custom audience development (take full advantage of the
                  customer data you own)
                </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  Pinpointed targeting and retargeting (on a single ad platform
                  or across multiple)
                </template>
              </service-list-item>
            </template>
          </service-list>

          <service-list>
            <template #list-header>Monitor</template>
            <template #list-block>
              <service-list-item>
                <template #list-text> Daily monitoring </template>
              </service-list-item>
              <service-list-item>
                <template #list-text> Weekly optimizations </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  Comment thread responses on all ads
                </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  LIVE reporting (access the latest numbers at any time)
                </template>
              </service-list-item>
            </template>
          </service-list>

          <h5 class="pricing" data-paragraph>Pricing: Hourly Charge</h5>
          <div class="c-package__prompt">
            <div data-paragraph>
              Tell us about the campaign you’re looking to run!
            </div>
          </div>
        </div>

        <c-button btn-text="Book a Discovery call" centered link="/" />
      </div>

      <div class="l-section">
        <div class="l-container">
          <div class="c-faq">
            <div class="c-faq__header">
              <h2 data-paragraph>Frequently Asked Questions</h2>
            </div>
            <div class="c-faq__list">
              <faq-accordion>
                <template #title>
                  Is there a limit to the number of ads you’ll create?
                </template>
                <template #content>
                  Rarely! There are typically no limits/quotas to the number of
                  advertisements created and tested.
                </template>
              </faq-accordion>

              <faq-accordion>
                <template #title>Will I get to review the ads before they go live?
                </template>
                <template #content>
                  Yes! Our team will seek approval of all marketing
                  material/verbiage prior to publication.
                </template>
              </faq-accordion>

              <faq-accordion>
                <template #title>
                  I know I need to advertise online but I’m not sure what’s
                  best, can you help?
                </template>
                <template #content>Absolutely, tell us your goals and we’ll recommend a plan to
                  achieve them. Book that call... you can even take the plan and
                  execute it yourself if you want.
                </template>
              </faq-accordion>
            </div>
          </div>
        </div>
      </div>

      <RelatedSlider>
        <template #casestudies>
          <casestudy
            img-src="/assets/images/casestudy-img-3.jpg"
            link="/portfolio/ombraz-sunglasses">
            <template #casestudy-name> Ombraz Sunglasses </template>
            <template #casestudy-details> 3.5x Return on Ad Spend </template>
          </casestudy>

          <casestudy
            img-src="/assets/images/casestudy-img-1.jpg"
            link="/portfolio/qnightclub">
            <template #casestudy-name> QNightClub </template>
            <template #casestudy-details> Sold Out Shows </template>
          </casestudy>
        </template>
      </RelatedSlider>

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
      return 'Ad Management | NectrSocial'
    }
  },
  mounted() {
    // eslint-disable-next-line no-new
    new this.$pageAnimation('.scroller')
  }
}
</script>

<style scoped>
.l-section {
  overflow: hidden;
}
.logo-icon + .capability-hero__subtext {
  max-width: 840px;
  margin-top: 64px;
}
.c-capabilities__wrapper {
  margin-bottom: 70px;
}
.pricing {
  color: #344c63;
  margin-top: 80px;
}

.pricing + .c-package__prompt {
  margin-top: 0px;
  margin-bottom: 40px;
}
</style>
