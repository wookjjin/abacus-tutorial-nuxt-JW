// https://nuxt.com/docs/getting-started/routing
import { useUser } from '~/composable/user'

export default defineNuxtRouteMiddleware((to, from) => {
  try {
    const { user } = useUser()

    if (to.path !== '/') return navigateTo('/')

    if (!user.value) {
      return abortNavigation('Insufficient permissions.')
    }
  } catch (err) {
    return abortNavigation(err ?? 'not defined')
  }
})
