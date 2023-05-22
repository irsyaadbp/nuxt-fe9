export default defineEventHandler(async (event) => {
  const response = await $fetch("https://jsonplaceholder.typicode.com/todos/1");
  //   console.log({ response });
  event.context.user = response;
});
