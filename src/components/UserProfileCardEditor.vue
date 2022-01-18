<template>
  <section
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

    <div>
      <div class="mx-auto px-4 sm:px-6 lg:px-8">
        <form class="space-y-4 mt-4" @submit.prevent="save">
          <div>
            <label class="block text-sm font-medium text-gray-700" for="fullName">
              Full Name
            </label>
            <div class="mt-1">
              <input
                id="fullName"
                v-model="activeUser.name" autocomplete="fullName"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="fullName" placeholder="Your Full Name Here."
                required
                type="text"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700" for="email">
              Email Address
            </label>
            <div class="mt-1">
              <input
                id="email"
                v-model="activeUser.email" autocomplete="email"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="email" placeholder="You Email Address."
                required
                type="email"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700" for="email">
              Username
            </label>
            <div class="mt-1">
              <input
                id="username"
                v-model="activeUser.username" autocomplete="username"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="username" placeholder="Your Username Here."
                required
                type="text"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700" for="bio">Bio</label>
            <div class="mt-1">
            <textarea
              id="bio"
              v-model="activeUser.bio"
              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              name="bio"
              placeholder="Write few words about yourself."
              rows="4"
            />
            </div>
          </div>

          <hr>

          <div>
            <label class="block text-sm font-medium text-gray-700" for="website">
              Website
            </label>
            <div class="mt-1">
              <input
                id="website"
                v-model="activeUser.website" autocomplete="website"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="website" placeholder="Your Website Here."
                required
                type="text"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700" for="location">
              Location
            </label>
            <div class="mt-1">
              <input
                id="location"
                v-model="activeUser.location" autocomplete="location"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="location" placeholder="Your location here"
                required
                type="text"
              />
            </div>
          </div>

          <div class="mt-6 grid grid-cols-2 gap-4">
            <button
              class="w-full py-2 px-4 border border-gray-200 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 focus:outline-none"
              type="reset">
              Cancel
            </button>
            <button
              class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'UserProfileCardEditor',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      activeUser: {
        ...this.user
      }
    }
  },
  computed: {
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
  },
  methods: {
    save () {
      this.$store.dispatch('updateUser', this.activeUser)
    }
  }
}
</script>
