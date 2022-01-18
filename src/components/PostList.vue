<template>
  <div
    v-for="(post, index) in posts"
    :key="post.id"
  >
    <div
      v-if="index === 0"
      class="bg-white px-4 py-5 sm:px-6"
    >
      <div class="flex space-x-3">
        <div class="flex-shrink-0">
          <img :src="userById(post.userId).avatar"
               alt=""
               class="h-10 w-10 rounded-full"
          />
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-sm font-medium text-gray-900">
            <a class="hover:underline" href="#">{{ userById(post.userId).name }}</a>
          </p>
          <AppDate :timestamp="post.publishedAt"/>
        </div>
      </div>
      <div class="px-0 pt-6">
        <p>{{ post.text }}</p>
      </div>
    </div>
  </div>

  <div>
    <div
      class="flow-root px-4 py-5 sm:px-6 mt-2">
      <ul
        class="-mb-8"
        role="list"
      >
        <li
          v-for="(post, index) in posts"
          :key="post.id"
        >
          <div
            v-if="index !== 0"
            class="relative pb-8"
          >
            <span
              v-show="index !== (posts.length - 1)"
              aria-hidden="true"
              class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
            ></span>
            <div class="relative flex items-start space-x-3">

              <div class="relative">
                <img :src="userById(post.userId).avatar"
                     alt=""
                     class="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white"
                >

                <span class="absolute -bottom-0.5 -right-1 bg-white rounded-tl px-0.5 py-px">
                    <ChatAltIcon class="h-3 w-3 text-gray-500"/>
                  </span>
              </div>
              <div class="min-w-0 flex-1">
                <div>
                  <div class="text-sm">
                    <a class="font-medium text-gray-900" href="#">{{ userById(post.userId).name }}</a>
                  </div>

                  <AppDate :timestamp="post.publishedAt"/>

                </div>
                <div class="mt-2 text-sm text-gray-700">
                  <p>
                    {{ post.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import { ChatAltIcon } from '@heroicons/vue/solid'

export default {
  name: 'PostList',
  props: {
    posts: {
      required: true,
      type: Array
    }
  },
  computed: {
    users () {
      return this.$store.state.users
    }
  },
  components: {
    ChatAltIcon
  },
  methods: {
    postById (postId) {
      return this.posts.find(post => post.id === postId)
    },
    userById (userId) {
      return this.users.find(user => user.id === userId)
    }
  }
}
</script>
