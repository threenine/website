<template>
  <html class="h-full">
  <div class="min-h-full">
  <threenine-header/>
    <slot />
  </div>
  </html>
</template>

<script>
import ThreenineHeader from "../components/ThreenineHeader";
export default {
  name: "default",
  components: {ThreenineHeader}
}
</script>

<style scoped>

</style>
