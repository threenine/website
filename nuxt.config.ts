import { defineNuxtConfig } from 'nuxt'

// @ts-ignore
import tailwindTypography  from '@tailwindcss/typography'

export default defineNuxtConfig({
    app: {
        head: {

            meta: [{
                hid: 'description',
                name: 'description',
                content: 'Agile software consultancy & Bespoke software developers delivering high performance digital products'
            }],
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
            plugins:  [tailwindTypography, '@tailwindcss/aspect-ratio', '@tailwindcss/forms' ]
        }
    },
    modules: ['nuxt-schema-org'],
    schemaOrg: {
        canonicalHost: 'https://threenine.co.uk',
        position: 'head'
    },

})
