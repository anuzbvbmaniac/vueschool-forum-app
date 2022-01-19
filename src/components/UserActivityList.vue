<template>
  <div class="col-span-4 mt-4">
    <!-- Headline -->
    <div
      class="md:flex md:items-center md:justify-between"
    >
      <div class="flex items-center space-x-5">
        <div>
          <h1 class="text-2xl font-bold text-gray-900">Recent Activities</h1>
        </div>
      </div>
      <div
        class="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3"
      >
        <button
          class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
          type="button">
          Show only Started Threads
        </button>
      </div>
    </div>
    <div
      v-for="post in posts"
      :key="post.id"
      class="mt-5"
    >
      <div
        class="bg-white px-4 py-5 sm:px-6 rounded-md border border-gray-200 hover:shadow-md"
      >
        <div class="flex space-x-3">
          <div class="flex-shrink-0">
            <img
              :src="userById(post.userId).avatar"
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
  </div>
</template>

<script>

export default {
  name: 'UserActivityList',
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
  components: {},
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
