<template>
  <html class="h-full">
  <div class="min-h-full">
  <threenine-header/>
    <slot />
    <threenine-footer />
  </div>
  </html>
</template>

<script lang="ts" setup>
useSchemaOrg([
    defineWebSite({
      name: "threenine.co.uk",
      publisher: 'Threenine Consulting Limited'
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
      address:{
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
