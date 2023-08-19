<script lang="ts" setup>
const companies =[
  { name: 'Veterinary Medicines Directorate', logo:'/images/vmd-logo.svg'},
  { name: 'Ministry of Defence', logo:'/images/mod.svg'},
  { name: 'Deutsche Borse Group', logo:'/images/dbg.svg'}
]
</script>

<template>
  <div class="bg-gray-100">
    <div class="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
      <p class="text-center text-base font-semibold text-gray-500">Trusted by</p>
      <div class="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-3">
        <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1" v-for="company in companies" :key="company.name" >
          <img class="h-12" :src="company.logo" :alt="company.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
