<template>
  <div class="min-h-full">
   <threenine-header/>
    <slot />
    <threenine-footer />
  </div>

</template>

<script lang="ts" setup>
import ThreenineFooter from "~/components/facets/footer/ThreenineFooter.vue";
const route = useRoute()

useHead({
  title: `${route.meta.title} - threenine.co.uk`,
  meta: [{ name: 'og:title', content: `${route.meta.title} - threenine.co.uk`
  }]
})
useSchemaOrg([
    defineWebSite({
      name: "threenine.co.uk"
    }),
    defineOrganization({
      name: "Threenine Consulting Limited",
      logo: '/assets/img/logo.svg',
      sameAs: [
          'https://twitter.com/threenine39',
          'https://github.com/threenine'
      ]
    }),
    defineLocalBusiness({
      name: 'Threenine Consulting Limited',
      address: {
        streetAddress: '99 Wey Hill',
        addressLocality: 'Haslemere',
        addressRegion: 'Surrey',
        postalCode: 'GU27 1HT',
        addressCountry: 'UK'
      }
    })
])
</script>

<style scoped>

</style>
