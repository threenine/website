<script lang="ts" setup>
const route = useRoute()

const {data: page} = await useAsyncData('page', () => queryContent('/company')
    .where({_path: route.path})
    .findOne())

useHead({
  title: `${page.value?.title} `,
  titleTemplate: '%s - threenine.co.uk',
  meta: [
    { name: 'og:title', content: `${page.value?.title} - threenine.co.uk`},
    { name: 'og:description', content: `${page.value?.description}`},
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://threenine.co.uk' + route.path
    }
  ]
})

</script>

<template>

  <div class="overflow-hidden">
    <content-renderer :value="page" />
  </div>
</template>


