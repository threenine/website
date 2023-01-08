<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">

    <main>
      <div>
        <!-- Hero card -->
        <div class="relative">
          <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div class="absolute inset-0">
                <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100" alt="People working on laptops" />
                <div class="absolute inset-0 bg-orange-200 mix-blend-multiply" />
              </div>
              <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 class="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span class="block text-white">Develop your REST API's </span>
                  <span class="block text-orange-500">Reliably & faster</span>
                </h1>
                <p class="mx-auto mt-6 max-w-lg text-center text-xl text-gray-200 sm:max-w-3xl">API Template Pack enables your software development teams to focus on functionality rather than composition</p>
                <div class="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                  <div class="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    <a href="products/api-template-pack" class="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-orange-700 shadow-sm hover:bg-orange-50 sm:px-8">Learn More</a>
                    <a href="https://www.apitemplatepack.com" class="flex items-center justify-center rounded-md border border-transparent bg-orange-500 bg-opacity-90 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-100 sm:px-8">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Logo cloud -->
        <div class="bg-gray-100">
          <div class="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
            <p class="text-center text-base font-semibold text-gray-500">Trusted by</p>
            <div class="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-3">
              <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img class="h-12" src="~/assets/img/vmd-logo.svg" alt="Veterinary Medicines Directorate" />
              </div>
              <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img class="h-12" src="~/assets/img/mod.svg" alt="Ministry of Defence" />
              </div>
              <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img class="h-12" src="~/assets/img/dbg.svg" alt="Deutsche Borse Group" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- More main page content here... -->
    </main>
  </div>
</template>

<script setup>



</script>
