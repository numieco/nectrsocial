<template>
  <div class="c-capability">
    <div class="c-block__double orange"></div>
    <div class="c-service__block">
      <div>
        <div class="c-service-icon__block">
          <div class="icon-bg"></div>
          <img alt="" class="c-service__icon" loading="lazy" :src="icon" />
        </div>
        <h4 class="c-service__header">
          <slot name="package-name" />
        </h4>
        <div class="capability-list blocked">
          <div class="capabilty-list__item blocked">
            <div class="list-point"></div>
            <h6 class="no-margin">
              <slot name="package-feature-1" />
            </h6>
          </div>
          <div class="capabilty-list__item blocked">
            <div class="list-point"></div>
            <h6 class="no-margin">
              <slot name="package-feature-2" />
            </h6>
          </div>
          <div class="capabilty-list__item blocked">
            <div class="list-point"></div>
            <h6 class="no-margin">
              <slot name="package-feature-3" />
            </h6>
          </div>
          <div class="capabilty-list__item blocked">
            <div class="list-point"></div>
            <h6 class="no-margin">
              <slot name="package-feature-4" />
            </h6>
          </div>
        </div>
      </div>
      <div class="c-service__price">
        <div class="price">Price</div>
        <h3 class="alt-h3 no-margin">
          <slot name="package-price" />
          <span class="per-month">/month</span>
        </h3>
      </div>
      <nuxt-link class="c-service__link w-inline-block" :to="link">
        <h6 class="medium-text">I want this package</h6>
        <div class="right-arrow service-arrow"></div>
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
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
