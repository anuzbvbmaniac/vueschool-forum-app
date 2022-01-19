<template>
  <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:px-12 xl:py-20">
    <h3 class="text-xl font-medium text-gray-900">Create New Thread in <span
      class="font-bold underline">{{ forumName }}</span></h3>
    <form class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8" @submit.prevent="save">

      <div class="sm:col-span-2">
        <label class="block text-sm font-medium text-gray-900" for="subject">Title</label>
        <div class="mt-1">
          <input
            id="title"
            v-model="form.title"
            class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            name="subject"
            placeholder="Write your title here."
            type="text"
          />
        </div>
      </div>

      <div class="sm:col-span-2">
        <div class="flex justify-between">
          <label class="block text-sm font-medium text-gray-900" for="message">Content</label>
          <span id="message-max" class="text-sm text-gray-500">Max. 500 characters</span>
        </div>
        <div class="mt-1">
          <textarea
            id="Content"
            v-model="form.text"
            aria-describedby="message-max"
            class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
            name="Content"
            placeholder="Write your content here."
            rows="4"
          />
        </div>
      </div>

      <div class="sm:col-span-2 sm:flex sm:justify-end">
        <button
          class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-500 bg-white hover:bg-gray-50 focus:outline-none sm:w-auto"
          @click.prevent="$emit('cancel')"
        >
          Cancel
        </button>
        <button
          class="mt-2 ml-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ThreadEditor',
  props: {
    forumName: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      form: {
        title: '',
        text: ''
      }
    }
  },
  methods: {
    save () {
      this.$emit('save', { title: this.form.title, text: this.form.text })
    }
  }
}
</script>
