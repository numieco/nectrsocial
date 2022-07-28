<template>
  <div>
    <Header is-inverted />

    <div class="l-section first-section">
      <div class="l-section__header no-padding">
        <div class="l-container">
          <div class="c-section-header">
            <div>
              <h2 class="section-header__text">Our Work</h2>
              <h4 class="section-header__subtext">
                Here are some selected case studies from our favorite projects.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="c-casestudies">
        <div class="l-container">
          <div class="c-casestudy__wrapper">
            <casestudy
              featured
              img-src="/assets/images/casestudy-img-5.jpg"
              link="/casestudy/ably">
              <template #casestudy-name>
                <h4 class="alt-h4">Keep Your City Smiling</h4>
              </template>
              <template #casestudy-details>
                <h6 class="neutral-text mobile-hide">
                  Read all about how lorem ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry&#x27;s standard dummy text ever since the 1500s,
                </h6>
                <h6 class="neutral-text desktop-hide">The Big Pivot</h6>
              </template>
            </casestudy>

            <casestudy
              img-src="/assets/images/casestudy-img-3.jpg"
              link="/casestudy/ably">
              <template #casestudy-name>
                <h4 class="alt-h4">Ombraz Sunglasses</h4>
              </template>
              <template #casestudy-details>
                <h6 class="neutral-text">3.5x Return on Ad Spend</h6>
              </template>
            </casestudy>

            <casestudy
              img-src="/assets/images/casestudy-img-6.jpg"
              link="/casestudy/ably">
              <template #casestudy-name>
                <h4 class="alt-h4">Ably</h4>
              </template>
              <template #casestudy-details>
                <h6 class="neutral-text">From 0 to 40k Instagram Followers</h6>
              </template>
            </casestudy>

            <casestudy
              img-src="/assets/images/casestudy-img-1.jpg"
              link="/casestudy/ably">
              <template #casestudy-name>
                <h4 class="alt-h4">QNightClub</h4>
              </template>
              <template #casestudy-details>
                <h6 class="neutral-text">Sold Out Shows</h6>
              </template>
            </casestudy>

            <casestudy
              img-src="/assets/images/casestudy-img-4.jpg"
              link="/casestudy/ably">
              <template #casestudy-name>
                <h4 class="alt-h4">Frost</h4>
              </template>
              <template #casestudy-details>
                <h6 class="neutral-text">Driving Foot Traffic</h6>
              </template>
            </casestudy>
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
      return 'Our Portfolio | NectrSocial'
    }
  }
}
</script>
