<template>
  <div>
    <Header is-inverted />

    <div class="scroller">
      <casestudy-header hero-img="/assets/images/delille_cover.jpg" logo="/assets/images/delille.png">
        <template #title> DeLille Cellars </template>
        <template #caption>
          Premier Washington Winery
        </template>
        <template #catchphrase>
          A Signature Launch Fuels a Breakout Year
        </template>
        <template #description>
          DeLille Cellars is one of Washington's most established wineries, a Woodinville destination with a loyal following built over decades. In 2025, the brand expanded into the city with the launch of DeLille En Ville, a new restaurant and café in Seattle's University Village.
          <br />
          <br />
          Nectr Social partners with DeLille on winery social media marketing across Instagram and Facebook, the kind of hospitality-driven organic content that turns followers into guests. From the start, the goal was clear: grow an engaged audience across both platforms and turn the En Ville opening into a signature brand moment.
        </template>
      </casestudy-header>

        <casestudy-metrics>
          <template #header>The Results</template>

          <template #metrics>
            <metric-item small>
              <template #figure>2.5M</template>
              <template #description>content views</template>
            </metric-item>
            <metric-item small>
              <template #figure>4.5K</template>
              <template #description>net new followers</template>
            </metric-item>
            <metric-item small>
              <template #figure>850K+</template>
              <template #description>Instagram video views</template>
            </metric-item>
            <metric-item small>
              <template #figure>1.5K+</template>
              <template #description>saves</template>
            </metric-item>
            <metric-item small>
              <template #figure>4K</template>
              <template #description>comments</template>
            </metric-item>
          </template>
        </casestudy-metrics>

        <div class="l-container">
           <div style="margin:20px 0 40px 0; display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
                    <img src="/assets/images/delille-1.jpg" style="width:100%;aspect-ratio:3/4;object-fit:cover;">
                    <img src="/assets/images/delille-2.jpg" style="width:100%;aspect-ratio:3/4;object-fit:cover;">
                    <img src="/assets/images/delille-3.jpg" style="width:100%;aspect-ratio:3/4;object-fit:cover;">
                    <img src="/assets/images/delille-4.jpg" style="width:100%;aspect-ratio:3/4;object-fit:cover;">
                  </div>
                  </div>

        <casestudy-metrics>
          <template #header>DeLille En Ville Launch Performance (Instagram)</template>

          <template #metrics>
            <metric-item>
              <template #figure>65K</template>
              <template #description>reached across 7 pre-opening posts</template>
            </metric-item>
            <metric-item>
              <template #figure>1.1K</template>
              <template #description>shares</template>
            </metric-item>
          </template>
        </casestudy-metrics>

        <div class="c-work__writeup">
          <div class="l-container">
            <div class="c-writeup__inner">
              <div>
                <h2 class="alt-h2 no-margin" data-paragraph>The Approach</h2>
                <div class="c-writeup">
                  <h5 class="neutral-text" data-paragraph>
                    With an iconic winery and a brand-new urban venue to promote, the opportunity was to make both feel like one brand. Our strategy centered on an always-on organic presence, a Reels-first content engine, and a launch story worth following.
                  </h5>
                  <br />

                  <h5 class="neutral-text" data-paragraph>
                    Rather than a single announcement, we built anticipation over time, telling one brand story in chapters: teasing the space, revealing the location, and counting down to reservations. Across the calendar, we leaned into what the data rewarded for a hospitality brand: people in the frame over product on the shelf, and atmospheric venue photography that let both locations sell the experience.
                  </h5>
                  <br />

                  <h5 class="neutral-text" data-paragraph>
                    The launch produced the top organic post, top Reel, and top Facebook post of the year, proof that a well-told story can outperform an entire calendar of content.
                  </h5>
                  <br />

                  <h5 class="neutral-text" data-paragraph>
                    The goal wasn't just to post consistently, it was to build a compounding social presence that keeps DeLille visible and growing well beyond a single launch.
                  </h5>

                </div>
              </div>
            </div>
          </div>
        </div>

         <div class="l-section no-padding">
        <div class="c-work-services">
          <div class="c-services__header">
            <h2 data-paragraph>Services Provided</h2>
            <h4 class="neutral-text" data-paragraph>
              These are the services that were used in this project.
            </h4>
          </div>

          <div class="c-services__wrapper">
            <service-block icon="/assets/images/social-media.svg" link="/capabilities/social-media-management">
              <template #service> Social Media Management (Organic) </template>
              <template #service-details>
                Hand us the keys to your social channels. Complete, done-for-you
                social media management solutions with growth strategies baked
                in.
              </template>
            </service-block>

            <service-block icon="/assets/images/pv.svg" link="/capabilities/photo-video">
              <template #service> Photo &amp; Video </template>
              <template #service-details>
                Just the creative, nothing else. We'll send you photos, videos,
                or both featuring your product, brand, or service in its finest
                moments.
              </template>
            </service-block>
          </div>
        </div>

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
              <casestudy featured img-src="/assets/images/picklewood_cover.jpg" link="/portfolio/picklewood">
                <template #casestudy-name> Picklewood </template>
                <template #featured-summary>
                    Generating Hype Before The Doors Open
                </template>
                <template #casestudy-details>
                    Pickleball and social destination launches with an engaged
                    local following already in place.
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
      return 'DeLille Cellars | NectrSocial'
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
