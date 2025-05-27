<template>
  <div>
    <Header is-inverted />

    <div class="scroller">
      <casestudy-header hero-img="/assets/images/miw_cover.jpg" logo="/assets/images/made_in_washington.png">
        <template #title> Made in Washington </template>
        <template #caption>
          Curating the Best Goods of Washington State
        </template>
        <template #catchphrase>
          Driving Record-Breaking Q4 Revenue with Social Media and E-Commerce Ads
        </template>
        <template #description>
          Made In Washington, a local retailer dedicated to showcasing the best products from Washington State,
          partnered with Nectr Social to manage their social media presence and drive e-commerce sales. With retail
          stores established in Pike Place Market since 1984, they sought to expand their online reach and boost sales,
          particularly during the crucial Q4 holiday season.
          <br />
          <br />
          We implemented a comprehensive strategy combining organic social media management and Meta Ads to grow their
          online community, increase engagement, and optimize their e-commerce sales performance. Monthly content
          creation, including fresh photo and video assets, was paired with precise ad targeting to ensure Made In
          Washington’s products reached the right audiences.
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
            <service-block icon="/assets/images/social-media.svg" link="/capabilities/social-media-management">
              <template #service> Social Media Management (Organic) </template>
              <template #service-details>
                Hand us the keys to your social channels. Complete, done-for-you
                social media management solutions with growth strategies baked
                in.
              </template>
            </service-block>

            <service-block icon="/assets/images/fb-ad.svg" link="capabilities/meta-ads">
              <template #service> Meta Ads </template>
              <template #service-details>
                Ad creation/distribution, copywriting, creative testing, and
                insightful reporting.
              </template>
            </service-block>
          </div>
        </div>

        <casestudy-metrics>
          <template #header>Social media created:</template>

          <template #metrics>
            <metric-item>
              <template #figure>2.3M</template>
              <template #description> total content views across platforms </template>
            </metric-item>
            <metric-item>
              <template #figure>17.6K</template>
              <template #description>content interactions</template>
            </metric-item>
            <metric-item>
              <template #figure>17K+</template>
              <template #description>organic link clicks</template>
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
                    The success of the Meta ads, especially during the Q4 holiday season, played a significant role in
                    making this the most successful Q4 for Made In Washington to date. Their e-commerce sales reached
                    new heights, and the brand saw a major surge in engagement, proving the power of a strategic,
                    integrated approach to social media and paid advertising.
                  </h5>

                  <div style="margin-top:20px; display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
                    <img src="/assets/images/miw-1.jpg" style="width:100%;aspect-ratio:3/4;object-fit:cover;">
                    <img src="/assets/images/miw-2.jpg" style="width:100%;aspect-ratio:3/4;object-fit:cover;">
                    <img src="/assets/images/miw-3.jpg" style="width:100%;aspect-ratio:3/4;object-fit:cover;">
                    <img src="/assets/images/miw-4.jpg" style="width:100%;aspect-ratio:3/4;object-fit:cover;">
                    <img src="/assets/images/miw-5.jpg" style="width:100%;aspect-ratio:3/4;object-fit:cover;">
                    <img src="/assets/images/miw-6.jpg" style="width:100%;aspect-ratio:3/4;object-fit:cover;">
                    <img src="/assets/images/miw-7.jpg" style="width:100%;aspect-ratio:3/4;object-fit:cover;">
                    <img src="/assets/images/miw-8.png" style="width:100%;aspect-ratio:3/4;object-fit:cover;">
                  </div>

                </div>
              </div>
              <!--   <div class="c-writeup-img__block">
                <img
                  alt=""
                  class="c-writeup__img"
                  loading="lazy"
                  src="/assets/images/work-img.jpg"/>
              </div> -->
            </div>
          </div>
        </div>

        <casestudy-metrics>
          <template #header>Ads</template>
          <template #metrics>
            <metric-item small>
              <template #figure>Over $124K</template>
              <template #description>in online conversion revenue</template>
            </metric-item>

            <metric-item small>
              <template #figure>10.6x</template>
              <template #description>Return on Ad Spend (ROAS)</template>
            </metric-item>

            <metric-item small>
              <template #figure>Over 1,500</template>
              <template #description>individual purchases</template>
            </metric-item>
          </template>
        </casestudy-metrics>

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
                  Building an Award Winning Social Presence
                </template>
                <template #casestudy-details>
                  Building an Award Winning Social Presence
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
      return 'Astra Hotel Seattle | NectrSocial'
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
