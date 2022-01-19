<template>
  <div class="flex px-4 py-5 sm:px-6 mt-10 items-start space-x-4 pb-">
    <div class="flex-shrink-0">
      <img
        :alt="`${user.name} Profile Picture`"
        class="inline-block h-10 w-10 rounded-full"
        :src="user.avatar"
      />
    </div>
    <div class="min-w-0 flex-1">
      <form class="relative" @submit.prevent="save">
        <div
          class="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
          <label class="sr-only" for="comment">Add your comment</label>
          <textarea
            id="comment"
            v-model="text" class="block w-full py-3 border-0 resize-none focus:ring-0 sm:text-sm"
            name="comment"
            rows="3"
          />

          <!-- Spacer element to match the height of the toolbar -->
          <div aria-hidden="true" class="py-2">
            <!-- Matches height of button in toolbar (1px border + 36px content height) -->
            <div class="py-px">
              <div class="h-9"/>
            </div>
          </div>
        </div>

        <div class="absolute bottom-0 inset-x-0 pl-3 pr-2 py-2 flex justify-between">
          <div class="flex-shrink-0">
            <button
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="submit">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PostComment',
  data () {
    return {
      threads: this.$store.state.threads,
      posts: this.$store.state.posts,
      text: ''
    }
  },
  computed: {
    ...mapGetters({ user: 'authUser' }),
    thread () {
      return this.threads.find(thread => thread.id === this.id)
    },
    threadPosts () {
      return this.posts.filter(post => post.threadId === this.id)
    }
  },
  methods: {
    save () {
      const post = {
        text: this.text
      }
      this.$emit('save-post', { post })
      this.text = ''
    }
  }
}
</script>

<style scoped>

</style>
