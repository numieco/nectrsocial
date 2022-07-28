<template>
  <div>
    <Header is-inverted />

    <!-- DummyText Here -->
    <div class="l-section hero-section about-page">
      <div class="l-container">
        <div class="about-text__wrapper">
          <h1 class="about-hero__text">
            We get it done with purpose, and without the high price tag.
          </h1>
          <h3 class="neutral-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#x27;s standard dummy
            text ever since the 1500s.
          </h3>
          <div class="logo-icon yellow large"></div>
        </div>
      </div>
    </div>

    <!-- Add Team Image -->
    <div class="l-section">
      <div class="l-container">
        <div class="c-team__flex">
          <div class="team-photo__wrapper">
            <div class="c-block__double orange"></div>
            <div class="team-img__block">
              <img
                class="team-img"
                loading="lazy"
                src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"/>
            </div>
          </div>
          <div class="team-bio__wrapper">
            <h2>What makes us <span class="orange-text">different?</span></h2>
            <h5 class="neutral-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#x27;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </h5>
          </div>
        </div>
      </div>
    </div>

    <!-- Done -->
    <div class="l-section team-section">
      <div class="l-section__header no-padding">
        <div class="l-container">
          <div class="c-section-header">
            <div class="header-text__wrapper">
              <h2>Meet the Charm</h2>
              <h4 class="neutral-text">
                When hummingbirds move together, they are dubbed a charm. They
                fly together when they need to get things done, like pollinate a
                field of wildflowers, or crush social media.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="l-container">
        <div class="c-team__wrapper">
          <team-member img-src="/assets/images/team-img-1.jpg">
            <template #name>
              <div>Zak Kosher</div>
            </template>
            <template #role>
              <p class="alt-paragraph neutral-text">Founder</p>
            </template>
          </team-member>

          <team-member img-src="/assets/images/team-img-2.jpg">
            <template #name>
              <div>Dylan Rabinowitz</div>
            </template>
            <template #role>
              <p class="alt-paragraph neutral-text">
                Director Of Client Services
              </p>
            </template>
          </team-member>

          <team-member img-src="/assets/images/team-img-3.jpg">
            <template #name>
              <div>Kortney Gloska</div>
            </template>
            <template #role>
              <p class="alt-paragraph neutral-text">Creative Lead</p>
            </template>
          </team-member>

          <team-member img-src="/assets/images/team-img-4.jpg">
            <template #name>
              <div>Jonathan Ochoa</div>
            </template>
            <template #role>
              <p class="alt-paragraph neutral-text">Social Media Manager</p>
            </template>
          </team-member>

          <team-member img-src="/assets/images/team-img-5.jpg">
            <template #name>
              <div>Gianna Chen</div>
            </template>
            <template #role>
              <p class="alt-paragraph neutral-text">
                Field Social Media Manager
              </p>
            </template>
          </team-member>

          <team-member img-src="/assets/images/team-img-6.jpg">
            <template #name>
              <div>Tiare Bowman</div>
            </template>
            <template #role>
              <p class="alt-paragraph neutral-text">
                Social Media Marketing Manager
              </p>
            </template>
          </team-member>

          <team-member img-src="/assets/images/team-img-7.jpg">
            <template #name>
              <div>Ashley Forst</div>
            </template>
            <template #role>
              <p class="alt-paragraph neutral-text">
                Organic Social Media Manager
              </p>
            </template>
          </team-member>

          <team-member img-src="/assets/images/team-img-8.jpg">
            <template #name>
              <div>Apa</div>
            </template>
            <template #role>
              <p class="alt-paragraph neutral-text">Dylan’s Dog</p>
            </template>
          </team-member>
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
      return 'About | NectrSocial'
    }
  }
}
</script>
