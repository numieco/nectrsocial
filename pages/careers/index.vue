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
              <career-block link="/careers/content-specialist">
                <template #role>Creative Specialist</template>
                <template #role-details>
                  We are seeking a highly motivated and creative individual to
                  join our team as a Creative Specialist. This position will
                  report to our Creative Director and will be responsible for
                  pre-shoot planning, content creation, and post-production
                  editing. The ideal candidate will have experience in content
                  creation and be able to work with multiple clients and their
                  specific styles.
                </template>
                <template #role-type> Full Time or Contract </template>
                <template #role-location> Seattle, WA </template>
              </career-block>

              <career-block link="/careers/creative-director">
                <template #role>Creative Director</template>
                <template #role-details>
                  Nectr Social is a small but dynamic social media marketing
                  agency based in the vibrant city of Seattle. We specialize in
                  creating innovative and impactful digital marketing solutions
                  for a diverse range of clients. We are currently seeking a
                  talented and experienced Creative Director to join our team
                  and lead our creative efforts.
                </template>
                <template #role-type> Full Time, Salaried </template>
                <template #role-location> Seattle, WA </template>
              </career-block>
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
      return 'Careers | NectrSocial'
    },
  },

  mounted() {
    this.$initScroll('.scroller')
    this.$paragraph()
  },
}
</script>
