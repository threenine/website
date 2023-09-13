<script lang="ts" setup>
const route = useRoute()

useHead({
  title: 'Linux command cheat sheets - threenine.co.uk',
  meta: [{ name: 'og:title', content: 'Linux command cheat sheets - threenine.co.uk'
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

<template>
  <!-- component -->
  <div class="flex flex-col bg-white py-4 px-12">
    <div class="py-4">
      <div class="pl-[116px] pr-[205px] py-8">
        <div class="text-7xl text-black">Linux Command Cheat sheets</div>
        <div class="lead-xl font-light ">We have compiled and created two handy cheat sheets to help our developers remember useful terminal commands.</div>
      </div>
    </div>
    <div class="flex flex-col px-20 md:px-10 md:flex-row items-center justify-center gap-6">
      <div>
        <nuxt-img  provider="cloudinary" src="/v1694546097/ubuntu-snap_n1bd3e.png" alt="Featured Image 1" class="rounded-t-xl"/>
        <div class="px-9 pt-10 pb-14 bg-orange-500 rounded-b-lg">
          <div class="text-white space-y-4">
            <h3 class="text-xl font-bold lead-xl bold">Ubuntu Command Reference</h3>
            <div class="text-lg font-light">A list of the most commonly used Ubuntu commands</div>
          </div>
          <div class="flex justify-between pt-8">
            <ul class="flex flex-col gap-y-2.5">
              <li class="flex space-x-3 text-white">
                <Icon name="material-symbols:check-circle" alt="checked--v1" class="w-6 h-6"/>
                <span class="paragraph-l font-bold">Working with files</span>
              </li>
              <li class="flex space-x-3 text-white">
                <Icon name="material-symbols:check-circle" alt="checked--v1" class="w-6 h-6"/>
                <span class="paragraph-l font-bold">System Information</span>
              </li>
              <li class="flex space-x-3 text-white">
                <Icon name="material-symbols:check-circle" alt="checked--v1" class="w-6 h-6"/>
                <span class="paragraph-l font-bold">Managing Processes</span>
              </li>
            </ul>
            <div class="flex flex-col justify-end">
              <a href="https://garywoodfine.com/wp-content/uploads/2016/08/Ubuntu-Reference.pdf" class="py-3 px-6 bg-white text-primary-200 paragraph-m  rounded-full"><Icon name="ph:download-fill" class="h-4 w-4 mr-2" /> Download</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <nuxt-img  provider="cloudinary" src="/v1694546084/linux-snap_faxvzl.png" alt="Featured Image 1" class="rounded-t-xl"/>
        <div class="px-9 pt-10 pb-14 bg-gray-600 rounded-b-lg">
          <div class="text-white space-y-4">
            <h3 class="text-xl font-bold lead-xl bold">Linux Command reference</h3>
            <div class="text-lg font-light">A list of the most commonly used Linux commands</div>
          </div>
          <div class="flex justify-between pt-8">
            <ul class="flex flex-col gap-y-2.5">
              <li class="flex space-x-3 text-white">
                <Icon name="material-symbols:check-circle" alt="checked--v1" class="w-6 h-6"/>
                <span class="paragraph-l font-bold">SSH</span>
              </li>
              <li class="flex space-x-3 text-white">
                <Icon name="material-symbols:check-circle" alt="checked--v1" class="w-6 h-6"/>
                <span class="paragraph-l font-bold">File Compression</span>
              </li>
              <li class="flex space-x-3 text-white">
                <Icon name="material-symbols:check-circle" alt="checked--v1" class="w-6 h-6"/>
                <span class="paragraph-l font-bold">Shortcuts</span>
              </li>
            </ul>
            <div class="flex flex-col justify-end">
              <a href="https://garywoodfine.com/wp-content/uploads/2022/08/Linux-Reference.pdf" class="py-3 px-6 bg-white text-primary-200 paragraph-m  rounded-full"><Icon name="ph:download-fill" class="h-4 w-4 mr-2" />Download</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
