<template>
  <threenine-hero />
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
        <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
          <!-- Testimonial card-->
          <div class="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
            <img class="absolute inset-0 h-full w-full" src="~/assets/img/apitemplatepack.svg" />
            <div class="absolute inset-0 bg-orange-500 mix-blend-multiply" />
            <div class="absolute inset-0 bg-gradient-to-t from-orange-600 via-orange-600 opacity-90" />
            <div class="relative px-8">
              <blockquote class="mt-8">
                <div class="relative text-lg font-medium text-white md:flex-grow">
                  <svg class="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-orange-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p class="relative">The API Template pack provides an opinionated implementation guide to making use of popular leading .net framework based tools and utilities to assist developers to quickly and efficiently develop secure, stable and resilient REST API’s.</p>
                </div>

              </blockquote>
            </div>
          </div>
        </div>
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
  </div>
</template>

<script>
import ThreenineHero from "../components/ThreenineHero";
export default {
  name: "Index",
  components: {ThreenineHero}
}
</script>

<style scoped>

</style>
