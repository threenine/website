<template>
  <div>
  <threenine-hero />
    <logo-cloud/>
  <div class="relative bg-white py-16 sm:py-24">
    <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
      <div class="relative sm:py-16 lg:py-0">
        <div aria-hidden="true" class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
          <div class="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
          <svg class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
            <defs>
              <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
          </svg>
        </div>
<testimonial/>
      </div>

      <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
        <!-- Content area -->
        <div class="pt-12 sm:pt-16 lg:pt-20">
          <h2 class="text-3xl font-bold tracking-tight text-orange-500 sm:text-4xl">Empowering Software Teams</h2>
          <div class="mt-6 space-y-6 text-gray-500">
            <p class="text-lg">we work with clients throughout Western Europe and Northern America to help solve their most critical information, technology, and business challenges.</p>
            <p class="text-base leading-7"> Given the accelerated pace at which new technologies emerge and the specialized and evolving needs of our clients, it’s essential that Threeenine professionals work with today’s leading technologies to amplify the value we provide to our clients. </p>
            <p class="text-base leading-7">We are proud to offer products, solutions and services that leverage our expertise in REST API.</p>
          </div>
        </div>
      </div>
    </div>
    <skill-cloud />
  </div>
  </div>
</template>

<script lang="ts" setup>
useHead({title: "Cultivate, Develop & Sustain Innovation"})
</script>

<style scoped>

</style>
