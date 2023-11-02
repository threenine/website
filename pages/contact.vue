<template>
  <div class="relative isolate bg-white">
    <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <div
              class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
            <svg
                class="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true">
              <defs>
                <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="100%" y="-1"
                         patternUnits="userSpaceOnUse">
                  <path d="M130 200V.5M.5 .5H200" fill="none"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" stroke-width="0" fill="white"/>
              <svg x="100%" y="-1" class="overflow-visible fill-gray-50">
                <path d="M-470.5 0h201v201h-201Z" stroke-width="0"/>
              </svg>
              <rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"/>
            </svg>
          </div>
          <h2 class="text-3xl font-bold tracking-tight text-orange-500">Let's talk about API's</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">We'd love to have a chat and listen about your current API
            problems & how we may be able to help</p>
          <dl class="mt-10 space-y-4 text-base leading-7 text-gray-600">
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Address</span>
                <Icon name="heroicons-outline:building-office" class="h-7 w-6 text-gray-400" aria-hidden="true"/>
              </dt>
              <dd>99 Wey Hill<br/>Haslemere, Surrey, GU27 1HT</dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <Icon name="heroicons-outline:device-phone-mobile" class="h-7 w-6 text-gray-400" aria-hidden="true"/>
              </dt>
              <dd><a class="hover:text-gray-900" href="tel:+44 116 318 3635">+44 116 318 3635</a></dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <Icon name="heroicons-outline:envelope" class="h-7 w-6 text-gray-400" aria-hidden="true"/>
              </dt>
              <dd><a class="hover:text-gray-900" href="mailto:hello@threenine.co.uk">hello@threenine.co.uk</a></dd>
            </div>
          </dl>
        </div>
      </div>
      <contact-form/>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
useHead({
      title: "Contact | threenine.co.uk",

      meta: [
        {name: "og:title", content: "Contact | threenine.co.uk"},
        {name: "description", content: "Make contact with threenine.co.uk specialist API Developers"}
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://threenine.co.uk' + route.path
        }
      ]
    },
)
</script>
