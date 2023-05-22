<template>
  <NuxtLayout>
    <NuxtLoadingIndicator>
      <div>Loading....</div>
    </NuxtLoadingIndicator>

    <NuxtPage
      :path="path"
      :transition="{
        enterActiveClass: 'budi',
      }"
    />
  </NuxtLayout>
</template>

<script setup lang="ts">
const router = useRoute();
const path = router.path;
</script>
