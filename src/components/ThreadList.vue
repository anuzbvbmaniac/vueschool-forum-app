<template>
  <div class="max-w-8xl mx-auto sm:px-6 lg:px-8">

    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          <span>{{ 'Threads' }}</span>
        </h3>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
          <ul class="border-t border-gray-200 divide-y divide-gray-200 sm:mt-0 sm:border-t-0" role="list">

            <li v-for="thread in threads" :key="thread.id" class="pr-4">
              <div class="group block">
                <div class="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                  <div class="min-w-0 flex-1 flex items-center">

                    <div class="min-w-0 flex-1 px-6 md:grid md:grid-cols-5 md:gap-4">
                      <div class="block col-span-3">
                        <router-link :to="{ name: 'ThreadShow', params: { id: thread.id } }">
                          <p class="text-2xl text-indigo-500">
                            {{ thread.title }}
                          </p>
                          <p class="mt-2 flex items-center text-sm text-gray-500">
                            By
                            <router-link :to="'#'" class="ml-1 underline">{{ userById(thread.userId).name }}
                            </router-link>
                            ,
                            <AppDate :timestamp="thread.publishedAt"/>
                          </p>
                        </router-link>
                      </div>

                      <div class="flex items-center justify-center">
                        {{ thread.posts.length }} replies
                      </div>

                      <div class="flex">
                        <div class="flex-shrink-0">
                          <img
                            :src="userById(thread.userId).avatar"
                            alt="" class="h-12 w-12 rounded-full group-hover:opacity-75"/>
                        </div>
                        <div class="ml-4 mr-5">
                          <p class="text-sm font-medium text-purple-600 truncate">{{ userById(thread.userId).name }}</p>
                          <p class="flex items-center text-sm text-gray-500">
                            <AppDate :timestamp="thread.publishedAt"/>
                          </p>
                        </div>
                      </div>

                    </div>
                    <div>
                      <ChevronRightIcon aria-hidden="true" class="h-5 w-5 text-gray-400 group-hover:text-gray-700"/>
                    </div>
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
  name: 'ThreadList',
  props: {
    threads: {
      type: Array,
      required: true
    }
  },
  components: {
    ChevronRightIcon
  },
  methods: {
    userById (userId) {
      return this.users.find(user => user.id === userId)
    }
  },
  computed: {
    posts () {
      return this.$store.state.posts
    },
    users () {
      return this.$store.state.users
    }
  }
}
</script>

<style scoped>

</style>
