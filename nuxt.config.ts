import { defineNuxtConfig } from 'nuxt/config'
import Icons from 'unplugin-icons/vite'
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    image: {
        provider: 'cloudinary',
        cloudinary: {
            baseURL: 'https://res.cloudinary.com/threenine-co-uk/image/upload/'
        }
    },
    modules: ['nuxt-schema-org', '@nuxtjs/tailwindcss', '@nuxt/content',  '@nuxt/image', 'nuxt-icon',],
    runtimeConfig: {
        public: {
            fathom_analytics_id: process.env.fathom_analytics_id,
            siteUrl: 'https://threenine.co.uk',
            emailjs_api_service_id: process.env.emailjs_api_service_id,
            emailjs_api_template_id: process.env.emailjs_api_template_id,
            emailjs_api_public_key: process.env.emailjs_api_public_key
        }
    },
    schemaOrg: {
        canonicalHost: 'https://threenine.co.uk',
        position: 'head'
    },

    tailwindcss: {
        cssPath: '~/assets/css/main.css',
        configPath: 'tailwind.config',
    },
    vite: {
        plugins: [
            Icons({
                // the feature below is experimental ⬇️
                autoInstall: true
            })
        ]
    }

})
