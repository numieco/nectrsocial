<template>
  <div class="c-service">
    <div class="c-block__double orange"></div>
    <div class="c-service__block">
      <div>
        <div class="c-service-icon__block">
          <div class="icon-bg"></div>
          <img alt="" class="c-service__icon" loading="lazy" :src="icon" />
        </div>
        <slot name="service" />
        <slot name="service-details" />
      </div>
      <nuxt-link class="c-service__link w-inline-block" :to="link">
        <h6 class="medium-text">See what you get</h6>
        <div class="right-arrow service-arrow"></div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>
