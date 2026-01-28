<template>
  <div>
    <Header is-inverted />

    <div class="scroller">
      <casestudy-header hero-img="/assets/images/rainier_outdoor_cover.jpg" logo="/assets/images/rainier_outdoor.png">
        <template #title> Rainier Outdoor </template>
        <template #caption>
          Premium Canvas Structures & Outdoor Shelter Systems
        </template>
        <template #catchphrase>
          Building Visual Storytelling for a Premium Outdoor Brand
        </template>
        <template #description>
          Rainier Outdoor designs premium canvas structures and outdoor shelter systems built for rugged, real-world use. Their products are used across camping, glamping, hospitality, and long-term outdoor living environments. While the brand operated in a competitive category where peers already had strong social media presences, Rainier Outdoor had not yet built an audience of its own at the same scale.
          <br />
          <br />
         We developed a content strategy centered on audience growth, engagement, and translating a high-quality product into compelling social storytelling.
         
        </template>
      </casestudy-header>

        <casestudy-metrics>
          <template #header>The Results</template>

          <template #metrics>
            <metric-item>
              <template #figure>319%</template>
              <template #description>increase in Instagram followers</template>
            </metric-item>
            <metric-item>
              <template #figure>1.1M</template>
              <template #description> total views across platforms </template>
            </metric-item>
            <metric-item>
              <template #figure>23.7K</template>
              <template #description>content interactions</template>
            </metric-item>
            <metric-item>
              <template #figure>20.1K</template>
              <template #description>profile visits</template>
            </metric-item>
            <metric-item>
              <template #figure>500%</template>
              <template #description>increase in average Instagram engagement per post</template>
            </metric-item>
          </template>
        </casestudy-metrics>

        <div class="l-container">
        <div style="margin:20px 0 40px 0; display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
                    <img src="/assets/images/rainier-1.jpg" style="width:100%;aspect-ratio:3/4;object-fit:cover;">
                    <img src="/assets/images/rainier-2.jpg" style="width:100%;aspect-ratio:3/4;object-fit:cover;">
                    <img src="/assets/images/rainier-3.jpg" style="width:100%;aspect-ratio:3/4;object-fit:cover;">
                    <img src="/assets/images/rainier-4.jpg" style="width:100%;aspect-ratio:3/4;object-fit:cover;">
                  </div>
                  </div>

        <div class="c-work__writeup">
          <div class="l-container">
            <div class="c-writeup__inner">
              <div>
                <h2 class="alt-h2 no-margin" data-paragraph>The Approach</h2>
                <div class="c-writeup">
                  <h5 class="neutral-text" data-paragraph>
                    The opportunity was clear. Rainier Outdoor’s products were highly visual and inherently suited for social platforms when shown in real-world environments. 
                  </h5>
                  <br/>
                  

                  <h5 class="neutral-text" data-paragraph>
                   Each month, our content team traveled to capture the shelters in use across a range of settings. This included product-in-action footage, testimonials, how-to content, feature breakdowns, and team interviews. Locations included Under Canvas at the Gorge, Oregon’s Willamette Valley wine country, and the San Juan Islands, among others.
                  </h5>
                  <br/>
                  

                  <h5 class="neutral-text" data-paragraph>
                   By showing the shelters being used as intended, the content helped prospective customers understand not just what the product is, but how it fits into real experiences and use cases.
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
              <casestudy featured img-src="/assets/images/astra_hotel.jpg" link="/portfolio/astra-hotel-seattle">
                <template #casestudy-name> Astra Hotel Seattle </template>
                <template #featured-summary>
                    An award-winning social presence
                </template>
                <template #casestudy-details>
                    Boutique downtown hotel builds an award-winning social media presence from the ground up.
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
      return 'Rainier Outdoor | NectrSocial'
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
