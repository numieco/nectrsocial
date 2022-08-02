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
        </div>

        <c-button btn-text="Book a Discovery call" centered link="/" />
      </div>

      <div class="l-section">
        <div class="l-section__header no-padding">
          <div class="l-container">
            <div
              class="c-section-header"
              :class="caseStudyLength <= 2 ? 'even' : ''">
              <div>
                <h2 data-paragraph>Related Case Studies</h2>
                <h4 class="neutral-text" data-paragraph>
                  Check out some of the case studies related to this capability.
                </h4>
              </div>
              <div
                v-if="caseStudyLength > 3"
                class="c-slider-controls mobile-hide">
                <div class="c-slider-control__btn slider-prev is-disabled">
                  <div class="btn-dot"></div>
                  <div>Previous</div>
                </div>
                <div class="c-slider-control__btn slider-next">
                  <div>Next</div>
                  <div class="btn-dot next"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="l-container">
          <div
            class="c-casestudy__wrapper related"
            :class="caseStudyLength <= 2 ? 'even' : ''">
            <casestudy
              img-src="/assets/images/hero-img-4.jpg"
              link="/portfolio/keep-your-city-smiling">
              <template #casestudy-name> Keep Your City Smiling </template>
              <template #casestudy-details> The Big Pivot </template>
            </casestudy>

            <casestudy
              img-src="/assets/images/casestudy-img-6.jpg"
              link="/portfolio/ably">
              <template #casestudy-name> Ably </template>
              <template #casestudy-details>
                From 0 to 40k Instagram Followers
              </template>
            </casestudy>

            <casestudy
              img-src="/assets/images/casestudy-img-1.jpg"
              link="/portfolio/qnightclub">
              <template #casestudy-name> QNightClub </template>
              <template #casestudy-details> Sold Out Shows </template>
            </casestudy>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      caseStudyLength: 0
    }
  },

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
    this.getCasestudyLength()
  },

  methods: {
    getCasestudyLength() {
      this.caseStudyLength = document.querySelectorAll('.c-casestudy').length
    }
  }
}
</script>

<style scoped>
.l-section {
  overflow: hidden;
}
.c-casestudy__wrapper.related {
  flex-wrap: nowrap;
}
.c-casestudy {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
}
</style>
