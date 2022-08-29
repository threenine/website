import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            titleTemplate: '%s | threenine.co.uk',
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
            ]
        },
    },
 typescript: {
     strict: true
 },
    buildModules: ['@nuxtjs/tailwindcss']
})
