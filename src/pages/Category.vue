<template>

  <AppHeadline :title="'All Categories'"/>

  <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between py-4">
    <ul class="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" role="list">
      <li class="col-span-1 bg-white rounded-lg border border-gray-300 hover:shadow divide-y divide-gray-200">
        <div class="w-full flex items-center justify-between p-6 space-x-6">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="text-gray-900 text-sm font-medium truncate">Category Title</h3>
            </div>
            <p class="mt-1 text-gray-500 text-sm truncate">Category Description</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { MailIcon, PhoneIcon } from '@heroicons/vue/solid'

export default {
  name: 'Category',
  components: {
    MailIcon,
    PhoneIcon
  }
}
</script>

<style scoped>

</style>
