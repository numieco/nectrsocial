<template>
  <div class="l-section hero-section smallest">
    <div class="l-container">
      <div class="hero-block__wrapper">
        <div class="hero-block__double"></div>
        <div class="hero-block small">
          <div
            class="hero-text__wrapper"
            :class="photovideo ? 'wide' : 'small'">
            <h2 class="capability-hero__text" data-paragraph>
              <slot name="title" />
            </h2>
            <h4
              class="capability-hero__subtext"
              :class="photovideo ? 'small' : ''"
              data-paragraph>
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
    photovideo: Boolean
  }
}
</script>
