import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home'
import Thread from '@/pages/Thread'
import NotFound from '@/pages/NotFound'
import ThreadShow from '@/pages/ThreadShow'

import sourceData from '@/data.json'
import Forum from '@/pages/Forum'
import ForumShow from '@/pages/ForumShow'
import CategoryShow from '@/pages/CategoryShow'
import ProfileShow from '@/pages/ProfileShow'
import ThreadCreate from '@/pages/ThreadCreate'
import Category from '@/pages/Category'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'ProfileShow',
    component: ProfileShow,
    meta: { toTop: true, smoothScroll: true }
  },
  {
    path: '/profile/edit',
    name: 'ProfileEdit',
    component: ProfileShow,
    props: { edit: true }
  },
  {
    path: '/category/:id',
    name: 'CategoryShow',
    component: CategoryShow,
    props: true
  },
  {
    path: '/thread',
    name: 'Thread',
    component: Thread
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: ThreadShow,
    props: true,
    beforeEnter (to, from, next) {
      const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
      if (threadExists) {
        return next()
      } else {
        next({
          name: 'NotFound',
          params: { pathMatch: to.path.substring(1).split('/') },
          query: to.query,
          hash: to.hash
        })
      }
    }
  },
  {
    path: '/forum/:forumId/thread/create',
    name: 'ThreadCreate',
    component: ThreadCreate,
    props: true
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/forum',
    name: 'Forum',
    component: Forum
  },
  {
    path: '/forum/:id',
    name: 'ForumShow',
    component: ForumShow,
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to) {
    const scroll = {}
    if (to.meta.toTop) scroll.top = 0
    if (to.meta.smoothScroll) scroll.behavior = 'smooth'
    return scroll
  }
})
