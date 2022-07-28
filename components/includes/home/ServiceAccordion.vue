<template>
  <div class="c-service__item">
    <div class="c-service__inner" @click="toggleAccordion()">
      <slot name="title" />
      <div class="c-service__btn" :class="isOpen ? 'is-active' : ''">
        <div class="btn-line plus"></div>
        <div class="btn-line minus"></div>
      </div>
    </div>
    <div class="c-service__details" :class="isOpen ? 'is-open' : ''">
      <slot name="content" />
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
