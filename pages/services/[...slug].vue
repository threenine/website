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
      <content-renderer :value="service"/>
    </template>
    <template #rightColumn>

    </template>
  </nuxt-layout>
</template>
