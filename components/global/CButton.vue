<template>
  <div
    v-if="typeform"
    class="cta-btn"
    :class="btnClass"
    onclick="return gtag_report_conversion()"
    @click="toggleTypeform(id)">
    <div class="cta-btn__block" :class="btnClass">
      <div>{{ btnText }}</div>
    </div>
    <div class="cta-btn__double"></div>
  </div>
  <nuxt-link v-else class="cta-btn" :class="btnClass" :to="link">
    <div class="cta-btn__block" :class="btnClass">
      <div>{{ btnText }}</div>
    </div>
    <div class="cta-btn__double"></div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: '/',
    },
    typeform: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: 'loCI4B0l',
    },
    centered: Boolean,
    hideOnMobile: Boolean,
    white: Boolean,
    large: Boolean,
    small: Boolean,
    submit: Boolean,
  },

  computed: {
    btnClass() {
      return [
        this.white ? 'white-btn' : '',
        this.submit ? 'submit' : '',
        this.centered ? 'centralized' : '',
        this.large ? 'large' : '',
        this.small ? 'small' : '',
        this.hideOnMobile ? 'mobile-hide' : '',
      ]
    },
  },

  methods: {
    toggleTypeform(_id) {
      this.$createPopup(_id, {
        open: 'load',
      })
    },
  },
}
</script>

<style scoped>
.cta-btn.white-btn > .cta-btn__block {
  background-color: #ffffff;
  color: #13293d;
}
.cta-btn.white-btn > .cta-btn__double {
  background-color: #ffce5c;
  color: #13293d;
}
.cta-btn:hover > .cta-btn__block {
  top: 0;
  left: 0;
}
.cta-btn__block.small {
  padding: 0px 10px;
}
@media screen and (max-width: 479px) {
  .cta-btn__block.small {
    padding: 0px 15px;
  }
}
</style>
