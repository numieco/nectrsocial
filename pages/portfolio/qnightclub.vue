<template>
  <div>
    <Header is-inverted />

    <div class="scroller">
      <casestudy-header
        hero-img="/assets/images/qnightclub.jpg"
        logo="/assets/images/qnightclub-logo.png">
        <template #title> QNightClub </template>
        <template #caption> Sold Out Shows </template>
        <template #catchphrase> Let’s Go Dancin’ </template>
        <template #description>
          The epicenter for Seattle nightlife, Q Nightclub caters to a true
          nightclub experience on Capitol Hill. Throwing a diverse range of
          events focused on sounds from house and techno to trap and hip hop, Q
          Nightclub boasts a state-of-the-art Funktion One sound system and
          regularly hosts touring artists/DJs Wednesday through Saturday nights.
          <br />
          <br />
          Over the course of 2019, our team had the opportunity to build up a
          paid social media presence for Q Nightclub. Tasked with the
          responsibility of building awareness for upcoming shows with an end
          goal of driving ticket sales to these events, we were able to sell
          over 1.1k tickets on the Q Nightclub website while collecting a 13.59
          ROAS (return on ad spend) in Q4 of 2019, totalling over $50k in
          revenue.
          <br />
          <br />
          Being the music-lovers that we are, partnering up with Q Nightclub was
          a match made in heaven. Let&#x27;s dance!
        </template>
      </casestudy-header>

      <div class="l-section no-padding">
        <div class="c-work-services">
          <div class="c-services__header">
            <h2 data-paragraph>Services Provided</h2>
            <h4 class="neutral-text" data-paragraph>
              These are the services that were used in this project.
            </h4>
          </div>

          <div class="c-services__wrapper">
            <service-block
              icon="/assets/images/goggle-ads.svg"
              link="/capabilities/googleads">
              <template #service> Google Ads </template>
              <template #service-details>
                Show up where people are searching.
              </template>
            </service-block>

            <service-block
              icon="/assets/images/social-media.svg"
              link="/capabilities/social-media-management">
              <template #service> Social Media Management (Organic) </template>
              <template #service-details>
                Hand us the keys to your social channels. Complete, done-for-you
                social media management solutions with growth strategies baked
                in.
              </template>
            </service-block>
          </div>
        </div>

        <casestudy-metrics>
          <template #header> Q4 2019 Results </template>

          <template #metrics>
            <metric-item>
              <template #figure> 13.59 </template>
              <template #description> return on ad spend </template>
            </metric-item>

            <metric-item>
              <template #figure>1,145 </template>
              <template #description> tickets sold </template>
            </metric-item>

            <metric-item>
              <template #figure> $50,492</template>
              <template #description> returned in revenue </template>
            </metric-item>
          </template>
        </casestudy-metrics>

        <div class="c-work__writeup">
          <div class="l-container">
            <div class="c-writeup__inner">
              <div>
                <h2 class="alt-h2 no-margin" data-paragraph>The Work</h2>
                <div class="c-writeup">
                  <h5 class="neutral-text" data-paragraph>
                    Through a combination of conversion and event
                    response-fueled ads on Facebook and Instagram, Nectr worked
                    alongside artist management partners and Q Nightclub to
                    serve content from artist and venue pages to various custom
                    audiences across the Pacific Northwest.<br /><br />Using
                    test-and-learn and retargeting strategies, we were able to
                    create an adaptable, revenue-driving, ticket-selling machine
                    on social that has consistently driven above average ROAS
                    while maintaining a level of awareness within the local
                    Seattle market.
                  </h5>
                </div>
              </div>
              <div class="c-writeup-img__block">
                <img
                  alt=""
                  class="c-writeup__img"
                  loading="lazy"
                  src="/assets/images/work-img.jpg"/>
              </div>
            </div>
          </div>
        </div>

        <casestudy-metrics>
          <template #metrics>
            <metric-item small>
              <template #figure> 15+</template>
              <template #description> audiences built </template>
            </metric-item>

            <metric-item small>
              <template #figure>180+ </template>
              <template #description> adverts created & tested </template>
            </metric-item>

            <metric-item small>
              <template #figure> 78K+</template>
              <template #description> potential concert goers reached</template>
            </metric-item>
          </template>
        </casestudy-metrics>

        <c-button btn-text="Book a Discovery call!" centered typeform />
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
              <casestudy
                featured
                img-src="/assets/images/frost-thumb.jpg"
                link="/portfolio/frost">
                <template #casestudy-name> Frost </template>
                <template #featured-summary> Driving Foot Traffic </template>
                <template #casestudy-details> Driving Foot Traffic </template>
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
      return 'QNightClub | NectrSocial'
    }
  },

  mounted() {
    // eslint-disable-next-line no-new
    new this.$pageAnimation('.scroller')
  }
}
</script>
