<template>
  <div>
    <Header blue-bg />

    <div class="scroller">
      <service-header photovideo>
        <template #title>Photos & Video - For Your Social Feed </template>
        <template #description>
          Put our team to work creating photos and videos for your social feeds.
          <br />
          You send us your product, we shoot it, then send you awesome content.
          <br />
          Delivered once, or delivered monthly.
        </template>
      </service-header>

      <div class="l-section">
        <div class="c-capabilities__wrapper">
          <div class="logo-icon yellow large"></div>

          <div class="c-package">
            <h1 class="alt-h1" data-paragraph>Photo Packages</h1>

            <div class="capability-list__wrapper fullwidth">
              <package-block icon="/assets/images/photo.svg" link="/">
                <template #package-name> Level 1 Photo Package </template>
                <template #list-block>
                  <package-list-item>
                    <template #list-text>
                      10 finished photo assets per month
                    </template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text>
                      Sized for social media placements
                    </template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text> High res files delivered </template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text> Unlimited usage rights </template>
                  </package-list-item>
                </template>
                <template #package-price>$1,200</template>
              </package-block>

              <package-block icon="/assets/images/camera.svg" link="/">
                <template #package-name> Level 2 Photo Package </template>
                <template #list-block>
                  <package-list-item>
                    <template #list-text>
                      15 finished photo assets per month
                    </template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text>
                      Sized for social media placements
                    </template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text> High res files delivered </template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text> Unlimited usage rights </template>
                  </package-list-item>
                </template>
                <template #package-price>$1,600</template>
              </package-block>

              <package-block icon="/assets/images/3rd-package.svg" link="/">
                <template #package-name> Level 3 Photo Package </template>
                <template #list-block>
                  <package-list-item>
                    <template #list-text>
                      20 finished photo assets per month
                    </template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text>
                      Sized for social media placements
                    </template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text> High res files delivered </template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text> Unlimited usage rights </template>
                  </package-list-item>
                </template>
                <template #package-price>$2,000</template>
              </package-block>
            </div>
          </div>

          <div class="c-package video">
            <h1 class="alt-h1" data-paragraph>Video Packages</h1>

            <h4 class="neutral-text" data-paragraph>
              All videos are shot vertically, reel-style, and are ~15-30s in
              length.
            </h4>

            <div class="capability-list__wrapper fullwidth">
              <package-block icon="/assets/images/video.svg" link="/">
                <template #package-name> Level 1 Video Package </template>
                <template #list-block>
                  <package-list-item>
                    <template #list-text>
                      3 finished photo assets per month
                    </template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text> Royalty-free music </template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text>
                      Sized vertically, ready for TikTok, Reels, or
                      Stories</template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text>Unlimited usage rights </template>
                  </package-list-item>
                </template>
                <template #package-price>$850</template>
              </package-block>

              <package-block icon="/assets/images/video-2.svg" link="/">
                <template #package-name> Level 2 Video Package </template>
                <template #list-block>
                  <package-list-item>
                    <template #list-text>
                      6 finished photo assets per month
                    </template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text> Royalty-free music </template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text>
                      Sized vertically, ready for TikTok, Reels, or
                      Stories</template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text>Unlimited usage rights </template>
                  </package-list-item>
                </template>
                <template #package-price>$1,500</template>
              </package-block>
            </div>
          </div>

          <div class="c-package__prompt">
            <div data-paragraph>
              Don’t see a package that works?<br />Contact us for something more
              custom!
            </div>
          </div>
        </div>

        <c-button btn-text="Book a Discovery call!" centered link="/" />
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
                  I know the content your team creates is intended for social
                  media but can I use it somewhere else?
                </template>
                <template #content>
                  We’ll send you the high res files, feel free to use it for
                  purposes outside of social media.
                </template>
              </faq-accordion>

              <faq-accordion>
                <template #title> What about licensing? </template>
                <template #content>
                  The content we create is fully licensed to you, forever, it’s
                  yours.
                </template>
              </faq-accordion>

              <faq-accordion>
                <template #title> What if I don’t have a product? </template>
                <template #content>
                  While this service works best for businesses that sell a
                  product, our team
                </template>
              </faq-accordion>
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
      return 'Photo & Video | NectrSocial'
    }
  },

  mounted() {
    // eslint-disable-next-line no-new
    new this.$pageAnimation('.scroller')
  }
}
</script>
