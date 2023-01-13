<template>
  <div>
    <h3 class="text-base font-medium text-white">Services</h3>
    <ul role="list" class="mt-4 space-y-4">
      <li v-for="item in company" :key="item.title">
        <nuxt-link :to="item._path" class="text-base text-gray-300 hover:text-white">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup >
const company = await queryContent("services")
    .sort({ _file: -1, $numeric: true })
    .find();
</script>
