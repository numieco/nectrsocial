<template>
  <div class="c-metric" :class="small ? 'small' : ''">
    <h2 class="lorange-text no-margin" data-paragraph>
      <slot name="figure" />
    </h2>
    <h5 data-paragraph>
      <slot name="description" />
    </h5>
  </div>
</template>

<script>
export default {
  props: {
    small: Boolean
  }
}
</script>
