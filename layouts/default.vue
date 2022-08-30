<template>

   <threenine-header/>
    <slot />

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
