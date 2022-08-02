<template>
  <div class="c-team" :class="small ? 'small' : ''">
    <img class="cover-image" loading="lazy" :src="imgSrc" />
    <div :class="small ? 'slide-details__wrapper' : 'team-details__wrapper'">
      <div class="c-block__double"></div>
      <div class="team-details__block">
        <div class="slide-details__inner">
          <slot name="name" />
          <p class="alt-paragraph neutral-text"><slot name="role" /></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    small: Boolean,
    imgSrc: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
@media screen and (min-width: 1025px) {
  .c-team > .slide-details__wrapper {
    opacity: 0;
  }

  .c-team:hover > .slide-details__wrapper {
    opacity: 1;
  }
}
</style>
