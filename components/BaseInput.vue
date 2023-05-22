<template>
  <fieldset v-if="!noWrapper">
    <input />
  </fieldset>
  <input v-else />
</template>

<script setup lang="ts">
defineProps({
  noWrapper: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped></style>
