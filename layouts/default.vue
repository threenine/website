<template>
  <html class="h-full">
  <div class="min-h-full">
  <threenine-header/>
    <slot />
    <threenine-footer />
  </div>
  </html>
</template>

<script>
import ThreenineHeader from "../components/ThreenineHeader";
import ThreenineFooter from "../components/ThreenineFooter";
export default {
  name: "default",
  components: {ThreenineFooter, ThreenineHeader}
}
</script>

<style scoped>

</style>
