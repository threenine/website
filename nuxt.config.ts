import Icons from 'unplugin-icons/vite'
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
    tailwindcss: {
        config: {
            plugins: [ require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')],
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

})
