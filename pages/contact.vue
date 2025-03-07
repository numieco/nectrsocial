<template>
  <div>
    <Header is-inverted />

    <!-- <div class="scroller"> -->
      <div data-tf-live="G3pjrEUB"></div>


      <div class="l-section hero-section about-page">
        <div class="l-container">
          <div id="form" class="embed-form"></div>
        </div>
      </div>

      <Footer />
    <!-- </div> -->
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
    // this.$initScroll('.scroller')
    this.$paragraph()

    createWidget('G3pjrEUB?utm_source=nectrsocial&utm_medium=embed-sdk&typeform-medium-version=next&utm_campaign=website', {
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
  height: 2100px;
  /* position: absolute;
  top: 0;
  left: 0; */
  height: 100%;
  margin-top: -120px;

  @media screen and (max-width: 640px) {
    margin-top: -180px;
  }
}

.l-section.hero-section{
  max-height: unset !important;
}

.l-container {
  height: 2100px;
}

iframe .TrKk{
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
