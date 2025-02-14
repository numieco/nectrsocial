<template>
  <div>
    <Header blue-bg />

    <div class="scroller">
      <service-header>
        <template #title> Social Media Management </template>
        <template #description>
          Relax [respectfully] we’ve got your socials covered. Let our team
          handle it all from content ideation to reporting. Hand the keys over
          to our team of experts.
        </template>
      </service-header>

      <div class="l-section">
        <div class="c-capabilities__wrapper">
          <div class="logo-icon yellow large"></div>

          <service-list>
            <template #list-header
              >What you get, baked into each package:
            </template>
            <template #list-block>
              <service-list-item>
                <template #list-text> Account leadership & strategy </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  Monthly content shoots, in our studio or on-site
                </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  Social media management for 3 channels of your choosing
                </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  Consistent posts using the content we gather, at a determined
                  weekly cadence
                </template>
              </service-list-item>
              <service-list-item>
                <template #list-text> We write the captions </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  Reel-style video content included
                </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  Community management — we respond to thread comments and DMs
                </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  Proactive outreach — starting new conversations with other
                  relevant social channels (friendly brands, potential
                  customers, public figures, etc.)
                </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  Engagement growth campaign — grows engagement ~300% on average
                </template>
              </service-list-item>
              <service-list-item>
                <template #list-text> Follower growth campaign </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  LIVE reporting, auto-updated every 30-minutes
                </template>
              </service-list-item>
            </template>
          </service-list>
        </div>

        <c-button btn-text="Get in Touch" centered typeform />
      </div>

      <div class="l-section">
        <div class="c-capabilities__wrapper no-margin">
          <div class="c-package">
            <h1 class="alt-h1" data-paragraph>Package breakdown.</h1>

            <div class="capability-list__wrapper fullwidth">
              <package-block
                id="nkO0JI7W"
                icon="/assets/images/social-media-3.svg">
                <template #package-name> Heavy Package </template>
                <template #list-block>
                  <package-list-item>
                    <template #list-text> 2 content shoot per month </template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text> Min 7 posts per week </template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text> Routine story content</template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text> Follower growth campaign </template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text> Engagement growth campaign </template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text> Community management </template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text> LIVE reporting </template>
                  </package-list-item>
                </template>
                <template #package-price>$4,000</template>
              </package-block>

              <package-block
                id="VumRw6fA"
                icon="/assets/images/social-media-2.svg">
                <template #package-name> Medium Package </template>
                <template #list-block>
                  <package-list-item>
                    <template #list-text> 1 content shoot per month </template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text> Min 5 posts per week </template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text> Routine story content</template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text> Follower growth campaign </template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text> Engagement growth campaign </template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text> Community management </template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text> LIVE reporting </template>
                  </package-list-item>
                </template>
                <template #package-price>$3,500</template>
              </package-block>

              <package-block
                id="vNeMBXAY"
                icon="/assets/images/social-media-1.svg">
                <template #package-name> Lite Package </template>
                <template #list-block>
                  <package-list-item>
                    <template #list-text> 1 content shoot per month </template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text> Min 3 posts per week </template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text> Routine story content</template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text> Follower growth campaign </template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text> Engagement growth campaign </template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text> Community management </template>
                  </package-list-item>
                  <package-list-item>
                    <template #list-text> LIVE reporting </template>
                  </package-list-item>
                </template>
                <template #package-price>$3,000</template>
              </package-block>
            </div>
          </div>
        </div>
      </div>

      <div class="l-section">
        <div class="c-capabilities__wrapper no-margin">
          <service-list>
            <template #list-header>Model Addition Benefits: </template>
            <template #list-block>
              <service-list-item>
                <template #list-text>
                  Ideal for brands that sell a product
                </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  Including models/hands that fit the brand's look and feel
                </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  Adds a human element to connect your audience with the product
                  directly
                </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  Shows how the product is used and how people respond to it
                </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  Model Budget: up to <b>$500/per model</b> (includes model
                  fees)
                </template>
              </service-list-item>
            </template>
          </service-list>

          <service-list>
            <template #list-header>Prop Addition Benefits:</template>
            <template #list-block>
              <service-list-item>
                <template #list-text>
                  Supporting materials to make studio shots of your product more
                  impactful. These could be ingredients are found in your
                  product, florals, items to put your product in, or items in
                  the backgrounds of images that visually elevate your photos
                </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  Studio rentals also fall under this section - renting
                  alternative studios can be helpful to give your product
                  additional context and a consistently new and fresh
                  surrounding
                </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  Prop Budget: <b>$500/per shoot</b>
                </template>
              </service-list-item>
            </template>
          </service-list>
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
      return 'Social Media Management | NectrSocial'
    },
  },
  mounted() {
    this.$initScroll('.scroller')
    this.$paragraph()
  },
}
</script>

<style scoped>
.l-section {
  overflow: hidden;
}
.c-capabilities__wrapper.no-margin {
  margin: 0;
}
</style>
