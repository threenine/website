<script lang="ts" setup>
import MaterialSymbolsLink from "~icons/material-symbols/link"
import RiGithubFill from "~icons/ri/github-fill"
import SimpleIconsNuget from "~icons/simple-icons/nuget"

import {PropType} from "@vue/runtime-core";

 const props = defineProps({
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
  <figure>
    <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
      <nuxt-img class="rounded-lg object-cover object-center shadow-lg" :src="image.url"
           :alt="image.title"/>
    </div>
    <figcaption class="mt-3 flex text-sm  text-orange-500 hover:text-orange-400">
      <div class="md:flex-none flex-1" >
        <a :href="website.url"
           target="_blank">  <material-symbols-link class="h-7 w-7 md:h-5 md:w-7  inline" aria-hidden="true"/>
        <span class="ml-2 mx-2 invisible md:visible">{{ website.title }}</span></a>
      </div>
      <div class="md:flex-none flex-1">
        <a :href="github.url" target="_blank"><ri-github-fill class="h-7 w-7 md:h-5 md:w-7  inline" aria-hidden="true"/>
        <span class="ml-2 mx-2 invisible md:visible">{{ github.title }}</span></a>
      </div>
      <div class="md:flex-none flex-1">
        <a :href="nuget.url"
           target="_blank" >  <simple-icons-nuget class="h-7 w-7 md:h-5 md:w-7  inline" aria-hidden="true"/>
        <span class="ml-2 invisible md:visible">{{ nuget.title }}</span></a>
      </div>
    </figcaption>
  </figure>
</template>

<style scoped></style>
