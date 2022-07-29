<template>
  <div class="c-faq__item">
    <div class="c-faq__inner" @click="toggleAccordion()">
      <h4 class="alt-h4">
        <slot name="title" />
      </h4>
      <div class="c-faq__btn" :class="isOpen ? 'is-active' : ''">
        <div class="btn-line blue plus"></div>
        <div class="btn-line blue minus"></div>
      </div>
    </div>
    <div class="c-faq__details" :class="isOpen ? 'is-open' : ''">
      <h5 class="no-margin">
        <slot name="content" />
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },

  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
.c-faq__btn.is-active > .plus {
  opacity: 0;
}
</style>
