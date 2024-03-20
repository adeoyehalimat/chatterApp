import { createRouter, createWebHistory } from 'vue-router'

import RegistrationPage from '@/views/registration-page.vue'
import LogIn from '@/views/log-in.vue'
import HomePage from '@/views/home-page.vue'
import DashBoard from '@/layout/dash-board.vue'
import AboutPage from '@/views/about-page.vue'
import ContactPage from '@/views/contact-page.vue'
import ConfirmMessage from '../components/confirm-message.vue'
import Postscreen1 from '../components/post-screen1.vue'
import Postscreen2 from '../components/post-screen2.vue'
import NotFound from '../components/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home-page',
      component: DashBoard,
      children: [
        { path: '/home-page', name: 'home-page', component: HomePage },
        { path: '/about-page', component: AboutPage },
        { path: '/contact-page', component: ContactPage },
        {
          path: '/blogs-page',
          name: 'Blogspage',
          component: () => import('../components/feed-screen.vue')
        }
      ]
    },
    { path: '/log-in', name: 'Log-in', component: LogIn },
    { path: '/registration-page', component: RegistrationPage },
    { path: '/confirm-message', component: ConfirmMessage },

    { path: '/post-screen1', component: Postscreen1 },
    { path: '/post-screen2', component: Postscreen2 },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound }
  ]
})

const isLoggedIn = !!localStorage.getItem('isLoggedIn')

router.beforeEach(async (to, from) => {
  if (
    // make sure the user is authenticated
    !isLoggedIn &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'Log-in'
  ) {
    // redirect the user to the login page
    return { name: 'Log-in' }
  }
})

export default router
