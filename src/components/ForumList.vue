<template>
  <div class="max-w-8xl mx-auto sm:px-6 lg:px-8">
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6 bg-indigo-700">
        <h3 class="text-lg leading-6 font-medium text-white">
          <router-link v-if="categoryId" :to="{ name: 'CategoryShow', params: {id: categoryId}}">
            {{ title }}
          </router-link>
          <span v-else>{{ title }}</span>
        </h3>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">

          <ul class="border-t border-gray-200 divide-y divide-gray-200 sm:mt-0 sm:border-t-0" role="list">

            <li v-for="forum in forums" :key="forum.id" class="pr-4">
              <div class="group block">
                <div class="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                  <div class="min-w-0 flex-1 flex items-center">

                    <div class="min-w-0 flex-1 px-6 md:grid md:grid-cols-2 md:gap-4">
                      <div class="hidden md:block">
                        <router-link :to="{ name: 'ForumShow', params: {id: forum.id} }">
                          <p class="text-2xl text-indigo-500">
                            {{ forum.name }}
                          </p>
                          <p class="mt-2 flex items-center text-sm text-gray-500">
                            {{ forum.description }}
                          </p>
                        </router-link>
                      </div>
                    </div>

                    <div class="ml-4 mr-5 text-center">
                      <p class="text-sm font-medium text-purple-600 truncate">{{ forum.threads?.length }}</p>
                      <p class="mt-2 flex items-center text-sm text-gray-500">
                        {{ forumThreadsWord(forum) }}
                      </p>
                    </div>
                  </div>
                  <div>
                    <ChevronRightIcon aria-hidden="true" class="h-5 w-5 text-gray-400 group-hover:text-gray-700"/>
                  </div>
                </div>
              </div>
            </li>

          </ul>

        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronRightIcon } from '@heroicons/vue/solid'

export default {
  components: {
    ChevronRightIcon
  },
  name: 'ForumList',
  props: {
    forums: {
      required: true,
      type: Array
    },
    title: {
      type: String,
      default: 'Forums'
    },
    categoryId: {
      type: String,
      required: false
    }
  },
  methods: {
    forumThreadsWord (forum) {
      if (forum.threads?.length) {
        return forum.threads.length > 1 ? 'threads' : 'thread'
      } else {
        return 'No Threads'
      }
    }
  }
}
</script>
