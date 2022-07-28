<template>
  <div class="c-career">
    <div class="c-block__double orange"></div>
    <div class="c-career__block">
      <div class="c-career__inner">
        <slot name="role" />
        <div class="c-role__description">
          <slot name="role-details" />
        </div>
        <div>
          <div class="c-career__details">
            <div class="career-icon"></div>
            <slot name="role-type" />
          </div>
          <div class="c-career__details">
            <div class="career-icon pin"></div>
            <slot name="role-location" />
          </div>
        </div>
      </div>
      <nuxt-link class="cta-btn small centralized w-inline-block" :to="link">
        <div class="cta-btn__block small">
          <div>Apply<br />for this role</div>
        </div>
        <div class="cta-btn__double"></div>
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
    }
  }
}
</script>
