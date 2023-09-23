<script lang="ts" setup>


const props = defineProps({
  title: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  start: {
    type: String,
    required: true
  },
  learn: {
    type: String,
    required: true
  }

})
let title = props.title as String;
</script>

<template>
  <div class="relative isolate overflow-hidden bg-gradient-to-b from-orange-50/20 pt-14">
    <div class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-orange-600/10 ring-1 ring-orange-50 sm:-mr-80 lg:-mr-96" aria-hidden="true" />
    <div class="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
        <h1 class="max-w-2xl text-4xl font-bold tracking-tight text-orange-500 sm:text-6xl lg:col-span-2 xl:col-auto">
          {{ title }}</h1>
        <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
          <p class="text-2xl font-semibold leading-8 text-gray-600 mb-2">{{ summary }}</p>
          <p class="text-xl leading-8 text-gray-600">{{ description }}</p>
          <div class="mt-10 flex items-center gap-x-6">
            <a href="https://threenine.co.uk/contact" target="_blank" class="bg-orange-500 hover:bg-orange-400 text-gray-100 font-bold text-xl py-6 px-6 rounded inline-flex items-center">
              <Icon name="mdi:chat" class="fill-current w-8 h-8 mr-2" />
              <span>Talk to us about your project</span>
            </a>
            <a :href="learn" class="text-xl font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <nuxt-img :src="image" :alt="title" class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36" />
      </div>
    </div>
    <div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
  </div>

</template>

