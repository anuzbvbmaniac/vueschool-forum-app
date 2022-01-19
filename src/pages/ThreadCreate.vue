<template>
  <div class="bg-gray-100">
    <div class="max-w-8xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="relative bg-white shadow-xl">
        <h2 class="sr-only">Contact us</h2>

        <div class="grid grid-cols-1 lg:grid-cols-3">
          <!-- Contact information -->
          <div class="relative overflow-hidden py-10 px-6 bg-indigo-700 sm:px-10 xl:p-12">
            <!-- UI Element -->
            <ThreadCreateSvg/>

            <h3 class="text-lg font-medium text-white mb-4">Important</h3>

            <span class="text-md text-white">Rules:</span>

            <div class="mt-2 prose prose-indigo prose-sm text-white mx-auto">
              <ul role="list">
                <li>Before posting any sort of Help request, including forum topics and FAQ, please use the search
                  function to prevent repeat questions and provide you with the most timely response.
                </li>
                <li>Use descriptive topic titles. Topic titles such as Help, Error, or Not Working are not allowed and
                  will be removed.
                </li>
                <li>Racism or sexism of any type is prohibited.</li>
                <li>Flaming or raging of any sort is not allowed.</li>
              </ul>
            </div>

          </div>

          <!-- Thread form -->
          <ThreadEditor @cancel="cancel" @save="save" :forum-name="forum.name"/>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ThreadCreateSvg from '@/components/ui-elements/ThreadCreateSvg'
import ThreadEditor from '@/components/ThreadEditor'

export default {
  name: 'ThreadCreate',
  props: {
    forumId: {
      type: String,
      required: true
    }
  },
  components: {
    ThreadEditor,
    ThreadCreateSvg
  },
  computed: {
    forum () {
      return this.$store.state.forums.find(forum => forum.id === this.forumId)
    }
  },
  methods: {
    async save ({ title, text }) {
      const thread = await this.$store.dispatch('createThread', {
        forumId: this.forum.id,
        title,
        text
      })
      await this.$router.push({ name: 'ThreadShow', params: { id: thread.id } })
    },
    cancel () {
      this.$router.push({ name: 'ForumShow', params: { id: this.forum.id } })
    }
  }
}
</script>
