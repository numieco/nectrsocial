<template>
  <div>
    <Header is-inverted />

    <div class="scroller">
      <div class="l-section first-section">
        <div class="l-section__header no-padding">
          <div class="l-container">
            <div class="c-section-header">
              <div>
                <h2 class="section-header__text" data-paragraph>
                  Join the flock!
                </h2>
                <h4 class="section-header__subtext" data-paragraph>
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
              <career-block link="JKGjqVay">
                <template #role> Social Media Manager </template>
                <template #role-details>
                  We’re looking to add a new member to the Nectr Social team
                  interested in building a career in the organic social media
                  space. This role will be client-facing and require independent
                  travel to and from local businesses to capture content for use
                  on client social channels.
                </template>
                <template #role-type> Full Time </template>
                <template #role-location> Seattle, WA / Portland, OR </template>
              </career-block>

              <career-block link="JKGjqVay">
                <template #role> Videographer / Editor </template>
                <template #role-details>
                  Is video your thing? We're looking to fill a part-time need
                  for reel-style video production and editing. If this is you,
                  let us know!
                </template>
                <template #role-type> Part Time </template>
                <template #role-location> Seattle, WA </template>
              </career-block>
              <!-- 
              <career-block link="/careers/field-social">
                <template #role> Field Social Media Manager </template>
                <template #role-details>
                  We’re looking to add a new member to the Nectr Social team
                  interested in building a career in the organic social media
                  space. This role will be client-facing and require independent
                  travel to and from local businesses to capture content for use
                  on client social channels.
                </template>
                <template #role-type> Full Time </template>
                <template #role-location> Seattle, WA / Portland, OR </template>
              </career-block>

              <career-block link="/careers/account-cordinator">
                <template #role> Account Coordinator </template>
                <template #role-details>
                  We’re looking to add a new member to the Nectr Social team
                  interested in building a career in the organic social media
                  space. This role will be client-facing and require independent
                  travel to and from local businesses to capture content for use
                  on client social channels.
                </template>
                <template #role-type> Part Time </template>
                <template #role-location> Seattle, WA </template>
              </career-block>
              
              <career-block link="/careers/google-ads-specialist">
                <template #role> Google Ads Specialist </template>
                <template #role-details>
                  We’re looking to add a new member to the Nectr Social team
                  interested in building a career in the organic social media
                  space. This role will be client-facing and require independent
                  travel to and from local businesses to capture content for use
                  on client social channels.
                </template>
                <template #role-type> Full Time </template>
                <template #role-location> Portland, OR</template>
              </career-block>

              <career-block link="/careers/paid-advertising-specialist">
                <template #role> Paid Advertising Specialist </template>
                <template #role-details>
                  We’re looking to add a new member to the Nectr Social team
                  interested in building a career in the organic social media
                  space. This role will be client-facing and require independent
                  travel to and from local businesses to capture content for use
                  on client social channels.
                </template>
                <template #role-type> Part Time </template>
                <template #role-location> Seattle, WA </template>
              </career-block> -->
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
      return 'Careers | NectrSocial'
    }
  },

  mounted() {
    // eslint-disable-next-line no-new
    new this.$pageAnimation('.scroller')
  }
}
</script>
