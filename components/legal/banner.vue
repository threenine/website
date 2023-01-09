<script lang="ts" setup>
import {ContentLink} from "~/types/ContentLink";
import {PropType} from "@vue/runtime-core";

defineProps({
  image: {
    type: Object as PropType<ContentLink>
  },
  version: {
    type : String
  },
  heading: {
    type: String
  }
  ,
  versionDate: {
    type: String
  },
  summary: {
    type: String
  }

})

</script>

<template>
  <div class="relative bg-orange-500 ">
    <div class="absolute inset-0">
      <img class="h-full w-full object-cover" :src="image.url" :alt="image.title" />
      <div class="absolute inset-0 bg-orange-500 mix-blend-multiply" aria-hidden="true" />
    </div>
    <div class="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">{{ heading }}</h1>
      <p class="mt-6 max-w-3xl text-xl text-orange-100">Version Number: {{ version }}</p>
      <p class="mt-6 max-w-3xl text-xl text-orange-100">Last Updated: {{ versionDate }}</p>
      <p class="mt-6 max-w-5xl text-xl text-orange-100">{{ summary }}</p>
    </div>
  </div>
</template>


