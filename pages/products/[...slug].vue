<script lang="ts" setup>


const route = useRoute()
const {data: product } = await useAsyncData('product', () => queryContent('/products').where({_path: route.path}) .findOne())
useHead({
  title: `${product.value?.title} `,
  titleTemplate: '%s - threenine.co.uk',
  meta: [
    {name: 'og:title', content: `${product.value?.title} - threenine.co.uk`},
    {name: 'og:description', content: `${product.value?.description}`},
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://threenine.co.uk' + route.path
    }
  ]
})


</script>

<template>
  <div class="overflow-hidden">
    <content-renderer :value="product" />
  </div>

</template>
