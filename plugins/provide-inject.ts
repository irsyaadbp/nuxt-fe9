import { useHydration } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  // console.log(nuxtApp.ssrContext?.event.context?.user, "SSR CONTEXT");
  useHydration(
    "user",
    () => nuxtApp.ssrContext?.event.context?.user,
    () => {}
  );
  return {
    provide: {
      hello: (msg: string) => `Hello ${msg}!`,
      test: "Budi",
      user: nuxtApp.ssrContext?.event.context?.user,
    },
  };
});
