<template>
  <!-- Page heading -->
  <header class="bg-gray-50 py-8">
    <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between">

      <div class="pb-5 border-b border-gray-200">
        <h3 class="text-3xl leading-6 font-medium text-gray-900 mb-3">
          {{ title }}
        </h3>
        <p v-if="description !== ''" class="mt-2 max-w-4xl text-md text-gray-500">{{ description }}</p>
      </div>

      <span v-if="createButton" class="sm:block">
        <router-link
          :to="{ name: this.routeNameForButton, params: routeParams }"
          class="inline-flex items-center px-4 py-2 border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          tag="button"
          type="button">
          <DocumentAddIcon aria-hidden="true" class="-ml-1 mr-2 h-5 w-5 text-white"/>
          {{ this.buttonTitle }}
        </router-link>
      </span>

    </div>
  </header>
</template>

<script>
import { DocumentAddIcon } from '@heroicons/vue/outline'

export default {
  props: {
    title: {
      required: true,
      type: String,
      default: 'Welcome to the Forum'
    },
    description: {
      required: false,
      type: String
    },
    createButton: {
      required: false,
      type: Boolean
    },
    routeNameForButton: {
      required: false,
      type: String
    },
    buttonTitle: {
      required: false,
      type: String
    },
    routeParams: {
      required: false,
      type: Object
    }
  },
  components: {
    DocumentAddIcon
  }
}
</script>
