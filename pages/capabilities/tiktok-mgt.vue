<template>
  <div>
    <Header blue-bg />

    <div class="scroller">
      <service-header>
        <template #title> TikTok Account Management </template>
        <template #description>
          A first-of-its-kind channel management package created exclusively for
          TikTok. We do everything, you watch your business account grow.
        </template>
      </service-header>

      <div class="l-section">
        <div class="c-capabilities__wrapper">
          <div class="logo-icon yellow large"></div>

          <service-list>
            <template #list-header>Creation / Caption Writing </template>
            <template #list-block>
              <service-list-item>
                <template #list-text>
                  Original UGC style content created that features your brand -
                  this content follows the script of what works best on TikTok.
                </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  Trend routing and TikTok platform filter usage where
                  appropriate.
                </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  Addition of TikTok content to our mutually shared content hub.
                  The client has a free license to use this content elsewhere if
                  desired.
                </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  Work with clients to plan organic content for specific dates
                  and events.
                </template>
              </service-list-item>
            </template>
          </service-list>

          <service-list>
            <template #list-header>Scheduling / Publishing Cadence </template>
            <template #list-block>
              <service-list-item>
                <template #list-text>
                  Agency will be responsible for posting 2-3 times per week on
                  TikTok.
                </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  Agency will manage scheduling and publishing of all TikTok
                  content. Management and publishing of content handled through
                  Sprout Social.
                </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  Execute relevant TikTok hashtag strategy on all content.
                </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  Ongoing conversations between agency and client to uncover
                  upcoming “TikTok-worthy” opportunities and updates.
                </template>
              </service-list-item>
            </template>
          </service-list>

          <service-list>
            <template #list-header>Amplified Community Management</template>
            <template #list-block>
              <service-list-item>
                <template #list-text>
                  Community Management on all TikTok posts.
                </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  Agency will respond to all post thread comments across
                  platforms.
                </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  Agency will respond to all direct messages across platforms.
                </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  Forward pertinent information &amp; customer questions to the
                  internal team when necessary.
                </template>
              </service-list-item>
            </template>
          </service-list>

          <service-list>
            <template #list-header>Reporting / Transparency </template>
            <template #list-block>
              <service-list-item>
                <template #list-text>
                  Live Dashboard: Addition of TikTok metric coverage to our live
                  reporting dashboard. Anytime access to live reporting
                  dashboard, updated automatically every 30 minutes.
                </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  Potentially: Monthly calls with agency (probably not)
                </template>
              </service-list-item>
            </template>
          </service-list>

          <h5 class="pricing" data-paragraph>Pricing: Hourly Charge</h5>
        </div>

        <c-button
          id="z07Mvu50"
          btn-text="Book a Discovery call"
          centered
          typeform/>
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
                  Will I have access to this content to use elsewhere?
                </template>
                <template #content>
                  Yes, we’ll send you the files, feel free to use them for other
                  purposes.
                </template>
              </faq-accordion>

              <faq-accordion>
                <template #title> Who will be creating these videos? </template>
                <template #content>
                  Our team of micro-influencers will be handling the creation of
                  these videos, ensuring authenticity in our UGC-style content.
                </template>
              </faq-accordion>

              <faq-accordion>
                <template #title>
                  What if I don’t have a TikTok, does this package still work?
                </template>
                <template #content>Yes! We’ll walk you through how to create your account and
                  get rolling.
                </template>
              </faq-accordion>
            </div>
          </div>
        </div>
      </div>

      <RelatedSlider>
        <template #casestudies>
          <casestudy
            img-src="/assets/images/hero-img-4.jpg"
            link="/portfolio/keep-your-city-smiling">
            <template #casestudy-name> KYCS </template>
            <template #casestudy-details> The Big Pivot </template>
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
      return 'TikTok Account Management | NectrSocial'
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
.pricing {
  color: #344c63;
  margin-top: 80px;
}
</style>
