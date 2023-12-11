// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/supabase',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    'nuxt-icon', // https://nuxt.com/modules/icon
  ],
  // https://nitro.unjs.io/config
  plugins: ['~/plugins/my-plugin'],
  css: ['~/assets/styles/main.scss'],
  routeRules: {
    // Homepage pre-rendered at build time
    // '/': { prerender: true },
    // Product page generated on-demand, revalidates in background
    // '/products/**': { swr: 3600 },
    // Blog post generated on-demand once until next deploy
    // '/blog/**': { isr: true },
    // Admin dashboard renders only on client-side
    // '/admin/**': { ssr: false },
    // Add cors headers on API routes
    // '/api/**': { cors: true },
    // Redirects legacy urls
    // '/old-page': { redirect: '/new-page' }
  },
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
