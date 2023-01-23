import Icons from 'unplugin-icons/vite'
import {isProduction} from "std-env";
export default defineNuxtConfig({
    app: {
        head: {

            meta: [{
                name: 'description',
                content: 'Agile software consultancy & Bespoke software developers delivering high performance digital products'
            }],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
            ]
        },
    },
    build: {
        transpile: ['@tailwindcss/typography','@tailwindcss/aspect-ratio','@tailwindcss/forms']
    },
    typescript: {
        strict: true
    },
    tailwindcss: {
        config: {
            content: [
                `components/**/*.{vue,js}`,
                `layouts/**/*.vue`,
                `pages/**/*.vue`,
                `composables/**/*.{js,ts}`,
                `plugins/**/*.{js,ts}`,
                `App.{js,ts,vue}`,
                `app.{js,ts,vue}`
            ]
        }
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
            google_analytics_id: process.env.google_analytics_id,
            production_mode: isProduction

        }
    }


})
