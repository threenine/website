<template>
  <div class="overflow-hidden bg-white">
    <div class="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
      <div class="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
      <div class="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
        <div>
          <h2 class="mt-2 text-3xl font-bold leading-8 tracking-tight text-orange-500 sm:text-4xl">Stop Web Crawlers</h2>
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
                <img class="rounded-lg object-cover object-center" src="~/assets/img/stop-web-crawler.png" alt="Stop Web Crawlers" width="1184" height="1376" />
              </div>
              <figcaption class="mt-3 flex text-sm text-gray-500">
                <LinkIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                <span class="ml-2"><a href="https://www.stopwebcrawlers.com" target="_blank">stopwebcrawlers.com</a></span>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="mt-8 lg:mt-0">
          <div class="mx-auto max-w-prose text-base lg:max-w-none">
            <p class="prose prose-md text-gray-500 mb-2">Countless surveys over the years have revealed that at least figures between <em><strong>55 - 70% of traffic to websites could
              bots</strong></em>. Bot traffic is a term that, describes any non-human traffic to a website or an app. Although The term bot traffic often carries
              a negative connotation, but in reality bot traffic isn’t necessarily good or bad; it all depends on the
              purpose of the bots.</p>
            <p class="prose prose-md text-gray-500 mb-2">Some bots are essential for useful services such as search engines and digital assistants (e.g. Google, Bing Siri, Alexa).
              Most companies welcome these sorts of bots on their sites. However, most other bots can be malicious, for example those used for the purposes of credential stuffing,
              data scraping, and launching DDoS attacks. Even some of the more benign ‘bad’ bots, such as unauthorized web crawlers,
              can be a nuisance because they can disrupt site analytics and generate click fraud.</p>

          </div>
          <div class="prose prose-md mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
            <p class="prose prose-md text-gray-500 mb-2"></p>
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
