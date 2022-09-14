<template>
  <div>
    <Header is-inverted />

    <div class="scroller">
      <div class="l-section first-section">
        <div class="l-section__header no-padding">
          <div class="l-container">
            <div class="c-section-header">
              <div>
                <h2 class="section-header__text" data-paragraph>
                  Our Capabilities
                </h2>
                <h4 class="section-header__subtext" data-paragraph>
                  This is a short description about Nectr's capabilities &amp;
                  services. Could be a line or two.
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div class="c-capabilities">
          <div class="l-container">
            <div class="c-services__wrapper fullwidth">
              <service-block
                icon="/assets/images/social-media.svg"
                link="/capabilities/social-media-management">
                <template #service>
                  Social Media Management (Organic)
                </template>
                <template #service-details>
                  Hand us the keys to your social channels. Complete,
                  done-for-you social media management solutions with growth
                  strategies baked in.
                </template>
              </service-block>

              <service-block
                icon="/assets/images/pv.svg"
                link="/capabilities/photo-video">
                <template #service> Photo &amp; Video </template>
                <template #service-details>
                  Just the creative, nothing else. We'll send you photos,
                  videos, or both featuring your product, brand, or service in
                  its finest moments.
                </template>
              </service-block>

              <service-block
                icon="/assets/images/goggle-ads.svg"
                link="/capabilities/ads">
                <template #service> Google Ads </template>
                <template #service-details>
                  Show up where people are searching.
                </template>
              </service-block>

              <service-block
                icon="/assets/images/tiktok.svg"
                link="/capabilities/tiktok-mgt">
                <template #service> TikTok Account Management </template>
                <template #service-details>
                  A first-of-its-kind channel management package created
                  exclusively for TikTok. We do everything, you watch your
                  business account grow.
                </template>
              </service-block>

              <service-block
                icon="/assets/images/fb-ad.svg"
                link="/capabilities/ads">
                <template #service> Facebook &amp; Instagram Ads </template>
                <template #service-details>
                  Ad creation/distribution, copywriting, creative testing, and
                  insightful reporting.
                </template>
              </service-block>

              <service-block
                icon="/assets/images/consulting.svg"
                link="/capabilities/consulting">
                <template #service> Consulting </template>
                <template #service-details>
                  You do it, we help. Stay the course with channel audits, video
                  call check-ins, and ongoing consulting services.
                </template>
              </service-block>
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
      return 'Capabilities | NectrSocial'
    }
  },

  mounted() {
    // eslint-disable-next-line no-new
    new this.$pageAnimation('.scroller')
  }
}
</script>
