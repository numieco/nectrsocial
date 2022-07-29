<template>
  <div class="c-career">
    <div class="c-block__double orange"></div>

    <div class="c-career__block">
      <div class="c-career__inner">
        <h3 class="c-career__role"><slot name="role" /></h3>

        <div class="c-role__description">
          <h5>
            <slot name="role-details" />
          </h5>
        </div>

        <div>
          <div class="c-career__details">
            <div class="career-icon"></div>
            <p class="neutral-text no-margin"><slot name="role-type" /></p>
          </div>
          <div class="c-career__details">
            <div class="career-icon pin"></div>
            <p class="neutral-text no-margin"><slot name="role-location" /></p>
          </div>
        </div>
      </div>

      <c-button btn-text="Apply for this role" centered :link="link" small />
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
