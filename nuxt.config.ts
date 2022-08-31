import { defineNuxtConfig } from 'nuxt'

// @ts-ignore
import tailwindTypography from '@tailwindcss/typography'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
// @ts-ignore
// @ts-ignore
// @ts-ignore
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
    buildModules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {
        // @ts-ignore
        config: {
            plugins:  [tailwindTypography ]
        }
    }

})