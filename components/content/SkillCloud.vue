<script lang="ts" setup>
const skills = [
  {name: 'Bitcoin', icon: 'simple-icons:bitcoin'},
  {name: 'C# Microsoft .net', icon: 'mdi:language-csharp'},
  {name: 'Rust', icon: 'fa6-brands:rust'},
  {name: 'Digital Ocean', icon: 'fa6-brands:digital-ocean'},
  {name: 'Linux', icon: 'uil:linux'}
]
</script>
<template>
  <div>
    <div class="mx-auto max-w-7xl py-12 px-6 lg:px-8">
      <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
        <div v-for="skill in skills" :key="skill.name"
             class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
          <Icon class="h-12 w-12 text-orange-500" :name="skill.icon" :alt="skill.name"/>
        </div>
      </div>
    </div>
  </div>
</template>
