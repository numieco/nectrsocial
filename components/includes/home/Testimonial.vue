<template>
  <div class="c-testimonial">
    <div class="c-block__double orange"></div>
    <div class="c-testimonial__block">
      <div>
        <div class="c-testimonial__header">
          <div class="quote-icon" :class="black ? 'black' : ''"></div>
          <div class="logo-icon small black"></div>
        </div>
        <div>
          <h5 class="c-testimonial__text" data-paragraph>
            <slot name="content" />
          </h5>
        </div>
      </div>
      <div class="c-testimonial__details">
        <div v-if="logo" class="c-testimonial__logo">
          <img :class="small ? 'small' : ''" loading="lazy" :src="logo" />
        </div>
        <h4 class="alt-h4" data-paragraph>
          <slot name="name" />
        </h4>
        <p class="neutral-text" data-paragraph>
          <slot name="role" />,
          <span class="medium-text">
            <slot name="company" />
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    black: Boolean,
    small: Boolean,
    logo: {
      type: String
    }
  }
}
</script>

<style>
.c-testimonial__logo {
  filter: grayscale(100%);
}
.c-testimonial__logo > .small {
  max-width: 80%;
}
.c-testimonial__details {
  margin-top: 30px;
}
</style>
