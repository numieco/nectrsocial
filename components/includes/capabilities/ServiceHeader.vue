<template>
  <div class="l-section hero-section smallest">
    <div class="l-container">
      <div class="hero-block__wrapper">
        <div class="hero-block__double"></div>
        <div class="hero-block small">
          <div class="hero-text__wrapper" :class="pv ? 'wide' : 'small'">
            <h2 class="capability-hero__text">
              <slot name="title" />
            </h2>
            <h4 class="capability-hero__subtext" :class="pv ? 'small' : ''">
              <slot name="description" />
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pv: Boolean
  }
}
</script>
