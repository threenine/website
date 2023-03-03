<script lang="ts" setup>
import RightSide from "~/components/products/microbes/RightSide.vue";
import ProductTitle from "~/components/products/microbes/productTitle.vue";



</script>

<template>
  <ContentDoc v-slot="{ doc }">
    <div class="overflow-hidden bg-white">
      <div class="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div class="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block"/>
        <div class="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
         <product-title :title="doc.title" />
        </div>
        <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div class="relative lg:col-start-2 lg:row-start-1">
            <svg class="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block" width="404" height="384" fill="none"
                 viewBox="0 0 404 384" aria-hidden="true">
              <defs>
                <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20"
                         patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"/>
            </svg>
            <div class="relative mx-auto max-w-prose text-base lg:max-w-none">
              <right-side :github="doc.links.github" :image="doc.productImage" :nuget="doc.links.nuget" :website="doc.links.website" ></right-side>
            </div>
          </div>
          <div class="prose prose-md max-w-prose lg:max-w-none text-gray-500 lg:col-start-1
          lg:row-start-1 lg:max-w-none prose-headings:text-orange-500 prose-a:text-orange-500 prose-a:no-underline  prose-headings:text-2xl ">
            <content-renderer :value="doc"/>
          </div>



        </div>
      </div>
    </div>
  </ContentDoc>

</template>

<style scoped></style>
