<template>
  <div
    class="mt-5"
    v-for="post in posts"
    :key="post.id"
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
