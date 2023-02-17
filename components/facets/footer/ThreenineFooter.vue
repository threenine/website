<template>
  <footer class="bg-gray-800" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="grid grid-cols-2 gap-8 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <Products/>
            <Services/>
            </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
             <Legals/>
          </div>
        </div>
        <newsletter/>
      </div>
      <div class="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
        <Socials/>
        <nuxt-link to="https://find-and-update.company-information.service.gov.uk/company/05608093" class="mt-8 text-base text-gray-400 md:order-1 md:mt-0">&copy {{ new Date().getFullYear() }} THREENINE CONSULTING LIMITED registered in England & Wales 05608093 VAT no. GB 900383850</nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>

import Products from "~/components/facets/footer/microbes/Products.vue";
import Services from "~/components/facets/footer/microbes/Services.vue";
import Legals from "~/components/facets/footer/microbes/Legals.vue";
import Socials from "~/components/facets/footer/microbes/Socials.vue";
import Newsletter from "~/components/facets/footer/microbes/Newsletter.vue";


</script>
