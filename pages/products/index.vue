<script lang="ts" setup>
const qc = await queryContent("products")
    .sort({ _file: -1, $numeric: true })
    .find();
</script>

<template>
  <main class="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
    <div class="mx-auto max-w-lg lg:max-w-7xl">
      <div class="border-b border-b-gray-200 pb-6">
        <h2
            class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl"
        >
          Recent Posts
        </h2>
      </div>
      <div class="mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
        <div
            v-for="article in qc"
            :key="article.title"
            class="flex flex-col justify-between rounded-lg border border-gray-200 p-4"
        >
          <nuxt-link :href="article._path">
            <p class="text-xl text-gray-900">{{ article.title }}</p>
            <p class="mt-3 text-gray-500">{{ article.description }}</p>
          </nuxt-link>

        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
