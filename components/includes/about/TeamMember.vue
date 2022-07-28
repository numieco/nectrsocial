<template>
  <div class="c-team" :class="teamSlide ? 'splide__slide' : ''">
    <img class="cover-image" loading="lazy" :src="imgSrc" />
    <div class="team-details__wrapper">
      <div class="c-block__double"></div>
      <div class="team-details__block">
        <div class="slide-details__inner">
          <slot name="name" />
          <slot name="role" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    teamSlide: Boolean,
    imgSrc: {
      type: String,
      required: true
    }
  }
}
</script>
