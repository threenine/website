<script lang="ts" setup>
import banner from '../../components/legal/banner'
</script>

<template>
  <ContentDoc v-slot="{ doc }">
    <banner :version="doc.version" :heading="doc.heading"  :image="doc.bannerImage" :version-date="doc.versionDate"  :summary="doc.summary"  />

    <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
      <div class="pt-12 sm:pt-16 lg:pt-20 max-w-prose lg:max-w-none text-gray-500 lg:col-start-1
          lg:row-start-1 lg:max-w-prose prose-headings:text-orange-500 prose-a:text-orange-500 prose-a:no-underline  prose-headings:text-2xl ">
        <content-renderer :value="doc" />
      </div>
    </div>

  </ContentDoc>
</template>

<style scoped></style>
