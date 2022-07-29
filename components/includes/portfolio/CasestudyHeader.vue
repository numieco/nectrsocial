<template>
  <div class="l-section first-section casestudy">
    <div class="l-container">
      <div class="c-work__header">
        <img alt="" class="c-work__img" loading="lazy" :src="heroImg" />
        <div class="work-title">
          <div class="c-block__double"></div>
          <div class="work-title__block">
            <div class="slide-details__inner">
              <h3 class="alt-h3"><slot name="title" /></h3>
              <h5 class="neutral-text no-margin">
                <slot name="caption" />
              </h5>
            </div>
            <div class="logo-icon yellow"></div>
          </div>
        </div>
      </div>
      <div class="c-work__summary">
        <img alt="" class="c-work__logo" loading="lazy" :src="logo" />
        <div class="c-summary__header">
          <h1 class="alt-h1 no-margin"><slot name="catchphrase" /></h1>
        </div>
        <div>
          <h5 class="neutral-text no-margin">
            <slot name="description" />
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heroImg: {
      type: String,
      required: true
    },
    logo: {
      type: String,
      required: true
    }
  }
}
</script>
