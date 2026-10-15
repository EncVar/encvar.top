// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxt/content', '@nuxt/image', '@nuxt/test-utils/module'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
