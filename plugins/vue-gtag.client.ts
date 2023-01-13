import VueGtag from 'vue-gtag-next'
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueGtag, {
        property: {
            id: 'UA-743206-4'
        }
    })
})
