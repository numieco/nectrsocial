<template>
  <div>
    <Header is-inverted />
    <div data-tf-live="G3pjrEUB"></div>
    <!-- Typeform Embedded Form -->
    <div class="l-section hero-section about-page">
      <div class="l-container">
        <div id="form" class="embed-form"></div>
      </div>
    </div>

    <Footer />
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
    // Initialize Typeform widget with the new form ID
    this.$paragraph()
    createWidget('G3pjrEUB', { // Updated Form ID
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
  height: 800px;
  border: 8px solid #eaeaea;
  border-radius: 24px;

  @media screen and (max-width: 640px) {
    max-height: 600px;
  }
}

.l-section.hero-section {
  max-height: unset !important;
}

.l-container {
  max-width: 850px;
}

iframe .TrKk {
  min-height: unset;
}
</style>

<style>
.tf-v1-widget,
.tf-v1-widget > iframe {
  width: 100% !important;
  height: 100% !important;
}
</style>