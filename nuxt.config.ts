// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  telemetry: false,
  site: {
    url: 'http://localhost:3000',
    name: 'Nuxt Starter Site',
    description: 'Welcome to nuxt starter!',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/seo"
  ]
})