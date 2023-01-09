<template>
  <div class="mt-12 md:mt-0">
    <h3 class="text-base font-medium text-white">Legal</h3>
    <ul role="list" class="mt-4 space-y-4">
      <li v-for="item in navigation.legal" :key="item.name">
        <nuxt-link :to="item.href" class="text-base text-gray-300 hover:text-white">{{ item.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
const navigation = {


  legal: [
    {name: 'Privacy', href: '../legals/privacy'},
    {name: 'Terms', href: '../legals/terms'},
  ],
}
</script>
