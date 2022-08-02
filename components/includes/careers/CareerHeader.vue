<template>
  <div class="c-role__header">
    <h1 class="alt-h1" data-paragraph>
      <slot name="role" />
    </h1>
    <div class="c-role__details">
      <div class="c-career__details">
        <div class="career-icon"></div>
        <p class="neutral-text no-margin" data-paragraph>
          <slot name="type" />
        </p>
      </div>
      <div class="c-career__details">
        <div class="career-icon pin"></div>
        <p class="neutral-text no-margin" data-paragraph>
          <slot name="location" />
        </p>
      </div>
    </div>
    <h6 class="neutral-text" data-paragraph>
      <slot name="summary" />
    </h6>
  </div>
</template>
