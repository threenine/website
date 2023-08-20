<script lang="ts" setup>
import RightSide from "~/components/products/microbes/RightSide.vue";
import ProductTitle from "~/components/products/microbes/productTitle.vue";

const route = useRoute()
const {data: product } = await useAsyncData('product', () => queryContent('/products').where({_path: route.path}) .findOne())
useHead({
  title: `${product.value?.title} `,
  titleTemplate: '%s - threenine.co.uk',
  meta: [
    {name: 'og:title', content: `${product.value?.title} - threenine.co.uk`},
    {name: 'og:description', content: `${product.value?.description}`},
  ]
})


</script>

<template>
  <div class="overflow-hidden">
    <content-renderer :value="product" />
  </div>

</template>
