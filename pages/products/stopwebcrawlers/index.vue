<template>
  <div class="overflow-hidden bg-white">
    <div class="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
      <div class="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
      <div class="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
        <div>
          <h2 class="mt-2 text-3xl font-bold leading-8 tracking-tight text-orange-500 sm:text-4xl">Threenine.Data</h2>
        </div>
      </div>
      <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8 ">
        <div class="relative lg:col-start-2 lg:row-start-1">
          <svg class="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
            <defs>
              <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
          </svg>
          <div class="relative mx-auto max-w-prose text-base lg:max-w-none ">
            <figure>
              <div class="aspect-w-12 aspect-h-7 lg:aspect-none ">
                <img class="rounded-lg object-cover object-center" src="~/assets/img/stopwebcrawlers.svg" alt="API Template Pack" width="1184" height="1376" />
              </div>
              <figcaption class="mt-3 flex text-sm text-gray-500">
                <LinkIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                <span class="ml-2"><a href="https://www.apitemplatepack.com" target="_blank">apitemplatepack.com</a></span>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="mt-8 lg:mt-0">
          <div class="mx-auto max-w-prose text-base lg:max-w-none">
            <p class="prose prose-md text-gray-500">When developing dotnet REST API Microservices there is always a lot of boiler plate and configuration code required before developers can focus on
              implementing the logic that the service requires.</p>
          </div>
          <div class="prose prose-md mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
            <p>The API Template Pack aims to minimise this effort, by enabling you to quickly generate new service stubs quickly and easily.</p>
            <p>The API Template pack provides an opinionated implementation guide to making use of popular leading .net framework based tools and utilities to assist developers to quickly and efficiently develop secure, stable and resilient REST API’s.</p>
            <p>The API Template pack helps to steer teams to implementing a number of best practices and common design patterns including</p>
            <ul role="list">
              <li>Vertical Slice Architecture</li>
              <li>REPR Design Pattern</li>
              <li>API Design Patterns</li>
              <li>API Design Principles</li>
              <li>Devops</li>
            </ul>
            <h3 class="mt-2 text-2xl font-bold leading-8 tracking-tight text-orange-500 sm:text-3xl">How the API Template Helps</h3>
            <p>Creating a resilient, stable and secure REST API’s is a difficult task, and many of the tasks you’ll need to perform are quite repetitive and can be error prone if completed incorrectly.</p>
            <p> The API Template pack aims to minimise the need to carry out these tasks, enabling you to only focus on the tasks that add real business value quickly.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>


definePageMeta({
  title: 'Stop Web Crawlers'
})
import { LinkIcon } from '@heroicons/vue/20/solid/index.js'

</script>

<style scoped>

</style>
