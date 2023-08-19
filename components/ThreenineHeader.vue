<template>
  <Popover class="relative bg-white mb-1">
    <div class="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true" />
    <div class="relative z-20">
      <div class="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
        <div>
          <nuxt-link to="/" class="flex">
            <span class="sr-only">Threenine</span>
            <img class="h-16 w-auto sm:h-16" src="~/assets/img/logo.svg?color=orange&shade=600" alt="threenine.co.uk" />
          </nuxt-link>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
            <span class="sr-only">Open menu</span>
            <Icon name="heroicons-solid:bars-3" class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <div class="hidden md:flex-1 md:flex md:items-center md:justify-between">
          <PopoverGroup as="nav" class="flex space-x-10">
            <Popover v-slot="{ open }">
              <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500']">
                <span>Products</span>
                <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
              </PopoverButton>

              <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-1">
                <PopoverPanel class="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white">
                  <div class="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                    <nuxt-link v-for="item in products" :key="item.title" :to="item._path" class="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50">
                      <div class="flex md:h-full lg:flex-col">
                        <div class="flex-shrink-0">
                          <span class="inline-flex items-center justify-center h-10 w-10 rounded-md  text-white sm:h-12 sm:w-12">
                          <nuxt-img class="rounded-lg object-cover object-center shadow-lg" :src="item.productImage.url"
                               :alt="item.title" />
                          </span>
                        </div>
                        <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                          <div>
                            <p class="text-base font-medium text-orange-500">
                              {{ item.title }}
                            </p>
                            <p class="mt-1 text-sm text-gray-500">
                              {{ item.summary }}
                            </p>
                          </div>
                          <p class="mt-2 text-sm font-medium text-orange-600 lg:mt-4">Learn more <span aria-hidden="true">&rarr;</span></p>
                        </div>
                      </div>
                    </nuxt-link>
                  </div>
                  <div class="bg-gray-50">
                    <div class="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                      <div v-for="item in callsToAction" :key="item.name" class="flow-root">
                        <a :href="item.href" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                          <Icon  :name="item.icon" class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                          <span class="ml-3">{{ item.value }}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
            <Popover v-slot="{ open }">
              <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500']">
                <span>Services</span>
                <Icon name="heroicons-outline:chevron-down" :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
              </PopoverButton>

              <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-1">
                <PopoverPanel class="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white">
                  <div class="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                    <nuxt-link v-for="item in services" :key="item.title" :to="item._path" class="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50">
                      <div class="flex md:h-full lg:flex-col">
                        <div class="flex-shrink-0">
                          <span class="inline-flex items-center justify-center h-10 w-10 rounded-md  text-white sm:h-12 sm:w-12">
                          <img class="rounded-lg object-cover object-center shadow-lg" :src="item.productImage.url"
                               :alt="item.title" />
                          </span>
                        </div>
                        <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                          <div>
                            <p class="text-base font-medium text-orange-500">
                              {{ item.title }}
                            </p>
                            <p class="mt-1 text-sm text-gray-500">
                              {{ item.summary }}
                            </p>
                          </div>
                          <p class="mt-2 text-sm font-medium text-orange-600 lg:mt-4">Learn more <span aria-hidden="true">&rarr;</span></p>
                        </div>
                      </div>
                    </nuxt-link>
                  </div>
                  <div class="bg-gray-50">
                    <div class="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                      <div v-for="item in callsToAction" :key="item.name" class="flow-root">
                        <a :href="item.href" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                          <Icon :name="item.icon" class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                          <span class="ml-3">{{ item.value }}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
          </PopoverGroup>
        </div>
      </div>
    </div>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5 sm:pb-8">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="~/assets/img/logo.svg?color=orange&shade=600" alt="Workflow" />
              </div>
              <div class="-mr-2">
                <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
            </div>
            <div class="mt-6 sm:mt-8">
              <nav>
                <div class="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                  <a v-for="item in products" :key="item.title" :href="item._path" class="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                    <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md sm:h-12 sm:w-12">
                       <span class="inline-flex items-center justify-center h-10 w-10 rounded-md  text-white sm:h-12 sm:w-12">
                          <nuxt-img class="rounded-lg object-cover object-center shadow-lg" :src="item.productImage.url"
                               :alt="item.title" />
                          </span>
                    </div>
                    <div class="ml-4 text-base font-medium text-orange-500">
                      {{ item.title }}
                    </div>
                  </a>
                </div>
                <div class="mt-8 text-base">
                  <nuxt-link to="products" class="font-medium text-orange-600 hover:text-orange-500"> View all products <span aria-hidden="true">&rarr;</span></nuxt-link>
                </div>
              </nav>
            </div>
          </div>
        </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  PhoneIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline/index'
import { ChevronDownIcon } from '@heroicons/vue/20/solid/index'

const products = await queryContent("products")
    .sort({ _file: -1, $numeric: true })
    .find()

const services =  await queryContent("services")
    .sort({ _file: -1, $numeric: true })
    .find()

const callsToAction = [
  { name: 'Contact', href: 'tel:+44-116-318-3635', value: '+44 116 318 3635' , icon: 'heroicons-outline:phone' },
]


</script>
