<template>
  <div>
    <Header is-inverted />

    <div class="l-section first-section">
      <div class="l-section__header no-padding">
        <div class="l-container">
          <div class="c-section-header">
            <div>
              <h2 class="section-header__text">Join the flock!</h2>
              <h4 class="section-header__subtext">
                We&#x27;re always looking for good people ready to do sweet
                work.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="c-careers">
        <div class="l-container">
          <div class="c-careers__wrapper">
            <career-block link="/">
              <template #role>
                <h3 class="c-career__role">Field Social Media Manager</h3>
              </template>
              <template #role-details>
                <h5>
                  We’re looking to add a new member to the Nectr Social team
                  interested in building a career in the organic social media
                  space. This role will be client-facing and require independent
                  travel to and from local businesses to capture content for use
                  on client social channels.
                </h5>
              </template>
              <template #role-type>
                <p class="neutral-text no-margin">Full Time</p>
              </template>
              <template #role-location>
                <p class="neutral-text no-margin">Seattle, WA / Portland, OR</p>
              </template>
            </career-block>

            <career-block link="/">
              <template #role>
                <h3 class="c-career__role">Account Coordinator</h3>
              </template>
              <template #role-details>
                <h5>
                  We’re looking to add a new member to the Nectr Social team
                  interested in building a career in the organic social media
                  space. This role will be client-facing and require independent
                  travel to and from local businesses to capture content for use
                  on client social channels.
                </h5>
              </template>
              <template #role-type>
                <p class="neutral-text no-margin">Part Time</p>
              </template>
              <template #role-location>
                <p class="neutral-text no-margin">Seattle, WA</p>
              </template>
            </career-block>

            <career-block link="/">
              <template #role>
                <h3 class="c-career__role">Google Ads Specialist</h3>
              </template>
              <template #role-details>
                <h5>
                  We’re looking to add a new member to the Nectr Social team
                  interested in building a career in the organic social media
                  space. This role will be client-facing and require independent
                  travel to and from local businesses to capture content for use
                  on client social channels.
                </h5>
              </template>
              <template #role-type>
                <p class="neutral-text no-margin">Full Time</p>
              </template>
              <template #role-location>
                <p class="neutral-text no-margin">Portland, OR</p>
              </template>
            </career-block>

            <career-block link="/">
              <template #role>
                <h3 class="c-career__role">Paid Advertising Specialist</h3>
              </template>
              <template #role-details>
                <h5>
                  We’re looking to add a new member to the Nectr Social team
                  interested in building a career in the organic social media
                  space. This role will be client-facing and require independent
                  travel to and from local businesses to capture content for use
                  on client social channels.
                </h5>
              </template>
              <template #role-type>
                <p class="neutral-text no-margin">Part Time</p>
              </template>
              <template #role-location>
                <p class="neutral-text no-margin">Seattle, WA</p>
              </template>
            </career-block>
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
      return 'Careers | NectrSocial'
    }
  }
}
</script>
