<template>
  <div class="c-work-metrics">
    <div class="c-metrics__header">
      <h2 class="alt-h2 no-margin" data-paragraph>
        <slot name="header" />
      </h2>
    </div>
    <div class="c-metrics__block">
      <div class="l-container">
        <div class="c-metrics__wrapper">
          <slot name="metrics" />
        </div>
      </div>
    </div>
  </div>
</template>
