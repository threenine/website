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
    modules: ['nuxt-schema-org', '@nuxtjs/tailwindcss'],
    schemaOrg: {
        canonicalHost: 'https://threenine.co.uk',
        position: 'head'
    },

})
