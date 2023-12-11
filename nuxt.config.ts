// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/supabase',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    'nuxt-icon', // https://nuxt.com/modules/icon
  ],
  css: ['~/assets/styles/main.scss'],
  runtimeConfig: {
    public: {
      baseUrl: process.env.SUPABASE_URL || 'http://localhost:3000',
    },
  },
  supabase: {
    redirect: false,
    // redirectOptions: {
    //   login: '/login',
    //   callback: '/',
    // },
    clientOptions: {
      auth: {
        flowType: 'pkce',
        detectSessionInUrl: true,
        persistSession: true,
        autoRefreshToken: true,
      },
    },
  },
})
