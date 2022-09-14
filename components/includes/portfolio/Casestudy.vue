<template>
  <nuxt-link
    class="c-casestudy w-inline-block"
    :class="featured ? 'featured' : ''"
    :to="link"><img alt="" class="cover-image" loading="lazy" :src="imgSrc" />
    <div class="slide-details__wrapper" :class="featured ? 'featured' : ''">
      <div class="c-block__double"></div>
      <div class="slide-details__block">
        <div class="slide-details__inner" :class="featured ? 'featured' : ''">
          <h4 class="alt-h4"><slot name="casestudy-name" /></h4>
          <div v-if="featured">
            <h6 class="neutral-text mobile-hide">
              <slot name="featured-summary" />
            </h6>
            <h6 class="neutral-text desktop-hide">
              <slot name="casestudy-details" />
            </h6>
          </div>
          <h6 v-else class="neutral-text">
            <slot name="casestudy-details" />
          </h6>
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

<style scoped>
.slide-details__block {
  transition: top 0.4s ease, right 0.4s ease;
}

.c-casestudy:hover > .slide-details__wrapper > .slide-details__block {
  top: 0px;
  right: 0px;
}

.c-casestudy:hover {
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
}

.c-casestudy {
  transition: padding 0.4s ease;
}
</style>
