<script lang="ts" setup>
import {PropType} from "@vue/runtime-core";

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  image: {
    type: Object as PropType<ContentLink>,
    required: true
  },
  github: {
    type :Object as PropType<ContentLink>,
    required: true
  },
  nuget: {
    type:Object as PropType<ContentLink>,
    required: true
  }
  ,
  website: {
    type: Object as PropType<ContentLink>,
    required: true
  }

})

let website = props.website as ContentLink
let image = props.image as ContentLink
let github = props.github as ContentLink
let nuget = props.nuget as ContentLink
</script>

<template>
  <div class="overflow-hidden">
    <div class="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
      <div class="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block"/>
      <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="relative lg:col-start-2 lg:row-start-1">
          <svg class="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block" width="404" height="384" fill="none"
               viewBox="0 0 404 384" aria-hidden="true">
            <defs>
              <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20"
                       patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"/>
          </svg>
          <div class="relative mx-auto max-w-prose text-base lg:max-w-none">
            <figure>
              <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                <nuxt-img class="rounded-lg object-cover object-center shadow-lg" :src="image.url"
                          :alt="image.title" width="400" height="400"/>
              </div>
              <figcaption class="mt-3 flex text-sm  text-orange-500 hover:text-orange-400">
                <div class="md:flex-none flex-1" >
                  <a :href="website.url"
                     target="_blank"><Icon name="material-symbols:link" class="h-7 w-7 md:h-5 md:w-7  inline"/>
                    <span class="ml-2 mx-2 invisible md:visible">{{ website.title }}</span></a>
                </div>
                <div class="md:flex-none flex-1">
                  <a :href="github.url" target="_blank"><Icon name="mdi:github" class="h-7 w-7 md:h-5 md:w-7  inline" aria-hidden="true"/>
                    <span class="ml-2 mx-2 invisible md:visible">{{ github.title }}</span></a>
                </div>
                <div class="md:flex-none flex-1">
                  <a :href="nuget.url"
                     target="_blank" >  <Icon name="simple-icons:nuget" class="h-7 w-7 md:h-5 md:w-7  inline" aria-hidden="true"/>
                    <span class="ml-2 invisible md:visible">{{ nuget.title }}</span></a>
                </div>
              </figcaption>
            </figure>

          </div>
        </div>
        <div class="prose prose-md max-w-prose text-gray-500 lg:col-start-1 text-3xl
          lg:row-start-1 lg:max-w-none prose-headings:text-orange-500 prose-a:text-orange-500 prose-a:no-underline  prose-headings:text-2xl ">
            <h2 class="mt-2 text-5xl font-bold leading-8 tracking-tight text-orange-500 sm:text-5xl">
              {{ title }}</h2>
          <slot name="description"/>
        </div>


      </div>
    </div>
  </div>
</template>

<style scoped></style>
