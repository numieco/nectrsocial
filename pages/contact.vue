<template>
  <div>
    <Header is-inverted />

    <div class="scroller">
           <div data-tf-live="01JK6WQGSAYX9P0XTRW33ZJ4F6"></div>

      <div class="l-section hero-section about-page">
        <div class="l-container">
          <div id="form" class="embed-form"></div>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
import { createWidget } from '@typeform/embed'

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
      return 'Contact | NectrSocial'
    },
  },

  mounted() {
    this.$initScroll('.scroller')
    this.$paragraph()

    createWidget('01JK6WQGSAYX9P0XTRW33ZJ4F6', {
      container: document.querySelector('#form'),
      hideHeaders: true,
      hideFooter: true,
      opacity: 0,
    })
  },
}
</script>

<style scoped>
.embed-form {
  width: 100%;
  height: 600px;
}
</style>

<style>
.tf-v1-widget,
.tf-v1-widget > iframe {
  width: 100% !important;
  height: 100% !important;
}
</style>
