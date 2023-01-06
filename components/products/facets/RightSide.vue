<script lang="ts" setup>
import MaterialSymbolsLink from '~icons/material-symbols/link'
import RiGithubFill from '~icons/ri/github-fill'
import SimpleIconsNuget from '~icons/simple-icons/nuget'
</script>

<template>
  <figure>
    <div class="aspect-w-12 aspect-h-7 lg:aspect-none">

      <img class="rounded-lg object-cover object-center shadow-lg" src="~/assets/img/apitemplatepack.svg"
           alt="API Template Pack" width="1184" height="1376"/>
    </div>
    <figcaption class="mt-3 flex text-sm  text-gray-500">
      <div class="hover:text-orange-700">
        <material-symbols-link class="h-5 w-5 flex-none inline" aria-hidden="true"/>
        <span class="ml-2 mx-2 "><a href="https://www.apitemplatepack.com"
                                    target="_blank">apitemplatepack.com</a></span>

      </div>
      <div class="hover:text-orange-700">
        <ri-github-fill class="h-5 w-5 flex-none inline" aria-hidden="true"/>
        <span class="ml-2 mx-2"><a href="https://github.com/threenine/api-template"
                                   target="_blank">threenine/api-template</a></span>
      </div>
      <div class="hover:text-orange-700">
        <simple-icons-nuget class="h-5 w-5 flex-none inline" aria-hidden="true"/>
        <span class="ml-2 "><a href="https://www.nuget.org/packages/threenine.ApiProject/"
                               target="_blank">threenine.ApiProject</a></span>
      </div>
    </figcaption>
  </figure>
</template>

<style scoped></style>
