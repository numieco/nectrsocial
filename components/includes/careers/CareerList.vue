<template>
  <div class="role-list__wrapper">
    <h3 class="alt-h4">
      <slot name="list-header" />
    </h3>
    <div class="role-list">
      <slot name="list-block" />
    </div>
  </div>
</template>
