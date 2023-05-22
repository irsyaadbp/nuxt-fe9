<template>
  <div>
    <h2>About</h2>
    <button @click="handleBack">Back</button>

    <base-input-jsx />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
const router = useRouter();
const { data } = await useFetch<{
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}>("https://jsonplaceholder.typicode.com/todos/1");

useSeoMeta({
  title: data.value?.title,
  ogTitle: data.value?.title,
});

function handleBack() {
  router.back();
}

onMounted(() => {
  console.log(window.history, "history");
  // console.log({ route });
  console.log({ router });
});
</script>

<style lang="scss" scoped></style>
