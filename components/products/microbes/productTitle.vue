<script lang="ts" setup>


defineProps({
  title: {
    type: String
  }

})
</script>

<template>
  <div>
    <h2 class="mt-2 text-3xl font-bold leading-8 tracking-tight text-orange-500 sm:text-4xl">
      {{ title }}</h2>
  </div>
</template>

