<template>
  <div class="l-section first-section casestudy">
    <div class="l-container">
      <div class="c-work__header">
        <img
          alt=""
          class="c-work__img"
          :class="invert ? 'due' : ''"
          loading="lazy"
          :src="heroImg"/>
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
        <img
          alt=""
          class="c-work__logo"
          :class="invert ? 'invert' : ''"
          loading="lazy"
          :src="logo"/>
        <div class="c-summary__header">
          <h1 class="alt-h1 no-margin" data-paragraph>
            <slot name="catchphrase" />
          </h1>
        </div>
        <div>
          <h5 class="neutral-text no-margin" data-paragraph>
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
    },
    invert: Boolean
  }
}
</script>

<style scoped>
.c-work__img.due {
  object-position: 50% 65%;
}
.c-work__logo.invert {
  filter: invert(100%) grayscale(100%);
  max-height: 150px;
}

@media screen and (max-width: 479px) {
  .c-work__logo.invert {
    max-height: 100px;
  }
}
</style>
