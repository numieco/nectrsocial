<template>
  <div class="capability-list__wrapper">
    <h3 class="alt-h3 no-margin">
      <slot name="list-header" />
    </h3>
    <div class="capability-list">
      <slot name="list-block" />
    </div>
  </div>
</template>
