<template>
  <div class="max-w-8xl mx-auto sm:px-6 lg:px-8 mt-0">
    <div class="grid grid-cols-1 md:grid-cols-6 gap-8">
      <!-- Profile Card -->
      <ProfileCard />

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

        <!-- Feed Block -->
        <UserActivityList :posts="userPosts"/>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserActivityList from '@/components/UserActivityList'
import ProfileCard from '@/components/ProfileCard'

export default {
  name: 'ProfileShow',
  components: { ProfileCard, UserActivityList },
  computed: {
    ...mapGetters({ user: 'authUser' }),
    userPosts () {
      return this.$store.state.posts.filter(post => post.userId === this.user.id)
    },
    userPostsCount () {
      return this.userPosts.length
    },
    userThreads () {
      return this.$store.state.threads.filter(thread => thread.userId === this.user.id)
    },
    userThreadsCount () {
      return this.userThreads.length
    }
  }
}
</script>
