<template>
  <div>
    <h3 class="text-base font-medium text-white">Products</h3>
    <ul role="list" class="mt-4 space-y-4">
      <li v-for="item in navigation.products" :key="item.name">
        <nuxt-link :to="item.href" class="text-base text-gray-300 hover:text-white">{{ item.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
const navigation = {
  products: [
    { name: 'API Template Pack', href: '../products/apitemplatepack' },


  ]}
</script>
