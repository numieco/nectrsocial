<template>
  <div>
    <Header blue-bg />

    <div class="scroller">
      <service-header>
        <template #title> Consulting </template>
        <template #description>
          This is for the DIYers, the ones that want to learn and apply the
          skills themselves. Great for small, one-human outfits, that haven’t
          quite graduated to our done-for-you packages just yet.
          <br />
          <br />
          Consulting sessions via Google Meet.
          <br />
          Sessions are 1 hour long.
        </template>
      </service-header>

      <div class="l-section">
        <div class="c-capabilities__wrapper">
          <div class="logo-icon yellow large"></div>

          <service-list>
            <template #list-header>What you get: </template>
            <template #list-block>
              <service-list-item>
                <template #list-text>
                  Expert recommendations and actionable takeaways
                </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  Homework 😏 (we’ll tell you what to do, but you gotta do it)
                </template>
              </service-list-item>
            </template>
          </service-list>

          <service-list>
            <template #list-header>A few things we could help with: </template>
            <template #list-block>
              <service-list-item>
                <template #list-text> Ecommerce funnel setup </template>
              </service-list-item>
              <service-list-item>
                <template #list-text> Ad Strategy Development </template>
              </service-list-item>
              <service-list-item>
                <template #list-text> Content Strategy Development </template>
              </service-list-item>
              <service-list-item>
                <template #list-text> Social Media Channel Audits </template>
              </service-list-item>
              <service-list-item>
                <template #list-text>
                  Social Media Troubleshooting & General Support
                </template>
              </service-list-item>
            </template>
          </service-list>
        </div>

        <c-button btn-text="Book a Discovery call" centered link="/" />
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
      return 'Consulting | NectrSocial'
    }
  },
  mounted() {
    // eslint-disable-next-line no-new
    new this.$pageAnimation('.scroller')
  }
}
</script>

<style scoped>
.l-section {
  overflow: hidden;
}
</style>
