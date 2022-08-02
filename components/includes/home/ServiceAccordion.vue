<template>
  <div class="c-service__item">
    <div class="c-service__inner" @click="toggleAccordion()">
      <h4 class="alt-h4" data-paragraph><slot name="title" /></h4>
      <div class="c-service__btn" :class="isOpen ? 'is-active' : ''">
        <div class="btn-line plus"></div>
        <div class="btn-line minus"></div>
      </div>
    </div>
    <div class="c-service__details" :class="isOpen ? 'is-open' : ''">
      <h5>
        <slot name="content" />
      </h5>
      <nuxt-link class="c-service-item__link w-inline-block" :to="link">
        <div>Learn more</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    }
  },

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

<style>
.c-service__btn.is-active > .plus {
  opacity: 0;
}
</style>
