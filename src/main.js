import { createApp } from 'vue'
import './assets/tailwind.css'
import App from './App.vue'

import router from '@/routes'
import store from '@/store'

const forumApp = createApp(App)

forumApp.use(router)
forumApp.use(store)

// Auto Global Component Registration
const requireComponent = require.context('./components', true, /App[A-Z]\w+\.(vue|js)$/)
requireComponent.keys().forEach(function (fileName) {
  let baseComponentConfig = requireComponent(fileName)
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig
  const baseComponentName = baseComponentConfig.name || (
    fileName
      .replace(/^.+\//, '')
      .replace(/\.\w+$/, '')
  )
  forumApp.component(baseComponentName, baseComponentConfig)
})

forumApp.mount('#app')
