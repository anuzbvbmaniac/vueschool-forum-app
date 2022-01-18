<template>
  <article
    class="col-span-1 md:col-span-2 bg-white rounded-md border border-gray-200 overflow-hidden mt-4 pb-8"
    style="height: fit-content"
  >
    <div>
      <div>
        <img
          alt="User Profile Background"
          class="h-32 w-full object-cover lg:h-48" src="https://i.imgur.com/fYVZt78l.jpg"
        />
      </div>
      <div class="mx-auto px-4 sm:px-6 lg:px-8">
        <div class="-mt-12 sm:-mt-10 sm:flex sm:items-end sm:space-x-5">
          <div class="flex">
            <img
              :alt="`${user.avatar}.name Profile Picture`"
              :src="user.avatar"
              class="h-18 w-18 rounded-full ring-4 ring-white sm:h-20 sm:w-20"
            />
          </div>
        </div>
        <div class="mt-2 min-w-0 flex-1">
          <h1 class="text-2xl font-bold text-gray-900 truncate">
            {{ user.name }}
          </h1>
        </div>
      </div>
    </div>

    <!-- Description list -->
    <div class="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">
            Username
          </dt>
          <dd class="mt-1 text-sm text-gray-900">
            {{ user.username }}
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">
            Email
          </dt>
          <dd class="mt-1 text-sm text-gray-900">
            {{ user.email }}
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">
            Posts
          </dt>
          <dd class="mt-1 text-sm text-gray-900">
            {{ userPostsCount }}
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">
            Threads
          </dt>
          <dd class="mt-1 text-sm text-gray-900">
            {{ userThreadsCount }}
          </dd>
        </div>
        <div class="sm:col-span-2">
          <dt class="text-sm font-medium text-gray-500">
            Bio
          </dt>
          <dd class="mt-1 max-w-prose text-sm text-gray-900 space-y-5">
            {{ user.bio }}
          </dd>
        </div>
        <div class="sm:col-span-2 border-t pt-4 text-center">
          <dt class="text-sm font-medium text-gray-500">
            Website
          </dt>
          <dd class="mt-1 text-sm text-gray-900">
            <a href="">www.anuzpandey.dev</a>
          </dd>
        </div>
        <div class="sm:col-span-2 border-t pt-4 text-center">
          <div class="mt-0 flex flex-col justify-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
            <button
              class="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="button"
            >
              <PencilIcon aria-hidden="true" class="-ml-1 mr-2 h-5 w-5 text-gray-400"/>
              <span>Edit Profile</span>
            </button>
          </div>
        </div>
      </dl>
    </div>
  </article>
  <UserProfileCardEditor :user="user"/>
</template>

<script>
import { PencilIcon } from '@heroicons/vue/solid'
import { mapGetters } from 'vuex'
import UserProfileCardEditor from '@/components/UserProfileCardEditor'

export default {
  name: 'ProfileCard',
  components: {
    UserProfileCardEditor,
    PencilIcon
  },
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
