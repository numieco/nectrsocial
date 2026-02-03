<template>
  <div>
    <Header is-inverted />

    <div class="scroller">
      <casestudy-header hero-img="/assets/images/the_westin_cover.jpg" logo="/assets/images/westin.jpg">
        <template #title> The Westin Seattle </template>
        <template #caption>
          Iconic Downtown Hospitality
        </template>
        <template #catchphrase>
          Authentic, On-Property Content Wins for Westin
        </template>
        <template #description>
          The Westin Seattle is a landmark hotel in the heart of downtown, welcoming travelers for business, leisure, and events year-round. As part of the Marriott portfolio, it's important for the brand to maintain a social presence that aligns with global standards, while connecting authentically at a local level.
          <br />
          <br />
          Nectr Social partners with The Westin Seattle to manage its Instagram and Facebook channels, ensuring the content feels elevated, yet grounded in the city it serves. Our strategy centered on maintaining a polished, always-on social presence supported by regular injections of fresh, on-property content. By pairing platform-native storytelling with bi-monthly content shoots, we ensured the channels stayed visually current while remaining flexible enough to highlight seasonal moments and hotel experiences.
        </template>
      </casestudy-header>

        <casestudy-metrics>
          <template #header>The Results</template>

          <template #metrics>
            <metric-item small>
              <template #figure>2.1M</template>
              <template #description> content views </template>
            </metric-item>
            <metric-item small>
              <template #figure>40K</template>
              <template #description>unique profile visits</template>
            </metric-item>
            <metric-item small>
              <template #figure>47.6K</template>
              <template #description>content interactions</template>
            </metric-item>
             <metric-item small>
              <template #figure>10.2K</template>
              <template #description>new, relevant followers</template>
            </metric-item>
          </template>
        </casestudy-metrics>

        <div class="l-container">
           <div style="margin:20px 0 40px 0; display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
                    <img src="/assets/images/the_westin_1.jpg" style="width:100%;aspect-ratio:3/4;object-fit:cover;">
                    <img src="/assets/images/the_westin_2.jpg" style="width:100%;aspect-ratio:3/4;object-fit:cover;">
                    <img src="/assets/images/the_westin_3.jpg" style="width:100%;aspect-ratio:3/4;object-fit:cover;">
                    <img src="/assets/images/the_westin_4.jpg" style="width:100%;aspect-ratio:3/4;object-fit:cover;">
                  </div>
                  </div>

        <div class="c-work__writeup">
          <div class="l-container">
            <div class="c-writeup__inner">
              <div>
                <h2 class="alt-h2 no-margin" data-paragraph>The Approach</h2>
                <div class="c-writeup">
                    <h5 class="neutral-text" data-paragraph>
                    Our strategy centered on maintaining a polished, always-on social presence supported by regular injections of fresh, on-property content. By pairing platform-native storytelling with bi-monthly content shoots, we ensured the channels stayed visually current while remaining flexible enough to highlight seasonal moments and hotel experiences through narrative-driven content that helps guests imagine themselves moving through the space.
                  </h5>
                  <br />
                
                  <h5 class="neutral-text" data-paragraph>
                    The focus wasn't on spikes or short-term wins - it was on building steady momentum, attracting relevant followers, and keeping engagement high throughout the year. Through consistent, narrative-driven content that helps guests imagine themselves moving through the space, we positioned The Westin Seattle as a top-of-mind choice for travelers throughout the year.
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
              <casestudy featured img-src="/assets/images/rainier_outdoor_cover.jpg" link="/portfolio/rainier-outdoor">
                <template #casestudy-name> Rainier Outdoors </template>
                <template #featured-summary>
                    Chasing Down The Competition
                </template>
                <template #casestudy-details>
                    Outdoor shelter brand drives awareness and engagement through authentic, story-driven content.
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
      return 'The Westin Seattle | NectrSocial'
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
