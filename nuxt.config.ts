import { defineNuxtConfig } from 'nuxt/config'
import Icons from 'unplugin-icons/vite'
import {isProduction} from "std-env";
export default defineNuxtConfig({
    tailwindcss: {
            cssPath: '~/assets/css/tailwind.css',
            configPath: 'tailwind.config',
        },
    vite: {
        plugins: [
            Icons({
                // the feature below is experimental ⬇️
                autoInstall: true
            })
        ]
    },
    modules: ['nuxt-schema-org', '@nuxtjs/tailwindcss', '@nuxt/content'],
    schemaOrg: {
        canonicalHost: 'https://threenine.co.uk',
        position: 'head'
    },
    runtimeConfig: {
        public: {
            fathom_analytics_id: process.env.fathom_analytics_id,

        }
    }


})
