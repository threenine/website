<script lang="ts" setup>
defineProps({
  heading: {
    type: String,
    default: 'Default title'
  },
  text: {
    type: String,
    default: 'Default description'
  },
  image: {
    type: String,
    default: '/images/api-dev-cta.jpg'
  }
})
const Click = () => {
  location.href = 'https://threenine.co.uk/contact'
};
</script>

<template>
  <section class="p-4 lg:p-8 bg-white">
    <div class="container mx-auto space-y-12">
      <div class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
        <img :src="image" alt="" class="h-80 dark:bg-gray-500 aspect-video">
        <div class="flex flex-col justify-center flex-1 p-6 bg-white">
          <h3 class="text-3xl font-bold">{{ heading}}</h3>
          <p class="my-6 dark:text-gray-400">{{text }}</p>
          <button type="button" @click="Click" class="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded-full">Start your project</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
