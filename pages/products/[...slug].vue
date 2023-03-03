<script lang="ts" setup>
import RightSide from "~/components/products/microbes/RightSide.vue";
import ProductTitle from "~/components/products/microbes/productTitle.vue";


</script>

<template>
  <div>
    <nuxt-layout name="product">
      <template #productTitle>
        <ContentDoc v-slot="{ doc }">
          <product-title :title="doc.title"/>
        </ContentDoc>
      </template>

      <template #productLinks>
        <ContentDoc v-slot="{ doc }">
          <right-side :github="doc.links.github" :image="doc.productImage" :nuget="doc.links.nuget"
                      :website="doc.links.website"></right-side>
        </ContentDoc>
      </template>
      <template #description>
        <ContentDoc v-slot="{ doc }">
          <content-renderer :value="doc"/>
        </ContentDoc>
      </template>
    </nuxt-layout>
  </div>
</template>
