<template>
  <!-- Page heading -->
  <header class="bg-gray-50 py-8">
    <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between">

      <div class="pb-5 border-b border-gray-200">
        <h3 class="text-3xl leading-6 font-medium text-gray-900 mb-3">
          {{ title }}
        </h3>
        <p class="mt-2 max-w-4xl text-md text-gray-500" v-if="description !== ''">{{ description }}</p>
      </div>

    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
      default: 'Welcome to the Forum'
    },
    description: {
      required: false,
      type: String
    }
  },
  components: {}
}
</script>
