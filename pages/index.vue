<template>
  <div>
    {{ $hello("world") }}
    {{ $test }}
  </div>
  <pre>{{ data }}</pre>
  <NuxtLink to="/about">About</NuxtLink>
</template>
<script setup lang="ts">
const nuxtApp = useNuxtApp();

// console.log(nuxtApp.payload, "Payload");
// const route = useRoute();
// const router = useRouter();
const { data } = useFetch("https://jsonplaceholder.typicode.com/todos/1", {
  key: "user",
});
// function handleBack() {
//   router.go(1);
// }
// // definePageMeta({
// //   pageTransition:
// // })
// // alternatively, you can also use it here

const { $hello, $user } = useNuxtApp();

// onMounted(() => {
//   // console.log(window.history, "history");
//   // console.log({ route });
//   console.log({ router });
// });
</script>
