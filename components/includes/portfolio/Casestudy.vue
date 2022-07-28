<template>
  <nuxt-link
    class="c-casestudy w-inline-block"
    :class="featured ? 'featured' : ''"
    :to="link"><img alt="" class="cover-image" loading="lazy" :src="imgSrc" />
    <div class="slide-details__wrapper" :class="featured ? 'featured' : ''">
      <div class="c-block__double"></div>
      <div class="slide-details__block">
        <div class="slide-details__inner" :class="featured ? 'featured' : ''">
          <slot name="casestudy-name" />
          <slot name="casestudy-details" />
        </div>
        <div class="right-arrow"></div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    featured: Boolean,
    imgSrc: {
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
