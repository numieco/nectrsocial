<template>
  <div class="c-capability">
    <div class="c-block__double orange"></div>
    <div class="c-service__block">
      <div>
        <div v-if="icon" class="c-service-icon__block">
          <div class="icon-bg"></div>
          <img alt="" class="c-service__icon" loading="lazy" :src="icon" />
        </div>
        <h4 class="c-service__header" data-paragraph>
          <slot name="package-name" />
        </h4>
        <div class="capability-list blocked">
          <slot name="list-block" />
        </div>
      </div>
      <div class="c-service__price">
        <div class="price" data-paragraph>Price</div>
        <h3 class="alt-h3 no-margin" data-paragraph>
          <slot name="package-price" />
          <span class="per-month">/month</span>
        </h3>
      </div>
      <a class="c-service__link w-inline-block" :href="link">
        <h6 class="medium-text">I want this package</h6>
        <div class="right-arrow service-arrow"></div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    icon: {
      type: String
    }
  }
}
</script>
