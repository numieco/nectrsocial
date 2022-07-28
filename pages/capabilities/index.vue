<template>
  <div>
    <Header is-inverted />

    <div class="l-section first-section">
      <div class="l-section__header no-padding">
        <div class="l-container">
          <div class="c-section-header">
            <div>
              <h2 class="section-header__text">Our Capabilities</h2>
              <h4 class="section-header__subtext">
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
              icon="/assets/images/pv.svg"
              link="/capabilities/photo-video">
              <template #service>
                <h4 class="c-service__header">Photo &amp; Video</h4>
              </template>
              <template #service-details>
                <h6 class="c-service__text">
                  Just the creative, nothing else. We’ll send you photos,
                  videos, or both featuring your product, brand, or service in
                  its finest moments.
                </h6>
              </template>
            </service-block>

            <service-block
              icon="/assets/images/goggle-ads.svg"
              link="/capabilities/goggle-ads">
              <template #service>
                <h4 class="c-service__header">Google Ads</h4>
              </template>
              <template #service-details>
                <h6 class="c-service__text">
                  Show up where people are searching.
                </h6>
              </template>
            </service-block>

            <service-block
              icon="/assets/images/tiktok.svg"
              link="/capabilities/tiktok-account-management">
              <template #service>
                <h4 class="c-service__header">TikTok Account Management</h4>
              </template>
              <template #service-details>
                <h6 class="c-service__text">
                  A first-of-its-kind channel management package created
                  exclusively for TikTok. We do everything, you watch your
                  business account grow.
                </h6>
              </template>
            </service-block>

            <service-block
              icon="/assets/images/fb-ad.svg"
              link="/capabilities/facebook-instagram-ads">
              <template #service>
                <h4 class="c-service__header">Facebook &amp; Instagram Ads</h4>
              </template>
              <template #service-details>
                <h6 class="c-service__text">
                  Ad creation/distribution, copywriting, creative testing, and
                  insightful reporting.
                </h6>
              </template>
            </service-block>

            <service-block
              icon="/assets/images/social-media.svg"
              link="/capabilities/social-media-management">
              <template #service>
                <h4 class="c-service__header">
                  Social Media Management (Organic)
                </h4>
              </template>
              <template #service-details>
                <h6 class="c-service__text">
                  Hand us the keys to your social channels. Complete,
                  done-for-you social media management solutions with growth
                  strategies baked in.
                </h6>
              </template>
            </service-block>

            <service-block
              icon="/assets/images/consulting.svg"
              link="/capabilities/consulting">
              <template #service>
                <h4 class="c-service__header">Consulting</h4>
              </template>
              <template #service-details>
                <h6 class="c-service__text">
                  You do it, we help. Stay the course with channel audits, video
                  call check-ins, and ongoing consulting services.
                </h6>
              </template>
            </service-block>
          </div>
        </div>
      </div>
    </div>

    <Footer />
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
  }
}
</script>
