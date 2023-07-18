<script lang="ts" setup>
import PageHeader from "~/components/services/page-header.vue";

const route = useRoute()
const {data: service} = await useAsyncData('service', () => queryContent('/services')
    .where({_path: route.path})
    .findOne())


useHead({
  title: `${service.value?.title} `,
  titleTemplate: '%s - threenine.co.uk',
  meta: [
      {name: 'og:title', content: `${service.value?.title} - threenine.co.uk`},
      {name: 'og:description', content: `${service.value?.description}`},
  ]
})
</script>

<template>
  <nuxt-layout name="service">
    <template #header>
      <page-header :banner="service.bannerImage" :title="service.title" :product-image="service.productImage"/>
    </template>

    <template #description>
      <content-renderer :value="service" />
    </template>
    <template #rightColumn>
       <div class="bg-white pr-4 sm:pr-6 lg:flex-shrink-0 lg:border-l lg:border-gray-200 lg:pr-8 xl:pr-0">
          <div class="h-full py-6 pl-6 lg:w-80">
            <!-- Start right column area -->
            <div class="relative h-full" style="min-height: 16rem">
              <div class="absolute inset-0 rounded-lg border-2 border-dashed border-gray-200">

              </div>
            </div>
            <!-- End right column area -->
          </div>
        </div>
    </template>
  </nuxt-layout>
</template>
