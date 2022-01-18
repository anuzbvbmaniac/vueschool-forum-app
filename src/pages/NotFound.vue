<template>
  <div class="bg-white">
    <main class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-xl mx-auto py-16 sm:py-24">
        <div class="text-center">
          <p class="text-sm font-semibold text-indigo-600 uppercase tracking-wide">404 error</p>
          <h1 class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">This page does not
            exist.</h1>
          <p class="mt-2 text-lg text-gray-500">The page you are looking for could not be found.</p>
        </div>

        <div class="mt-12">
          <h2 class="text-sm font-semibold text-gray-500 tracking-wide uppercase">Popular pages</h2>
          <ul class="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200" role="list">
            <li class="relative py-6 flex items-start space-x-4">
              <div class="min-w-0 flex-1">
                <h3 class="text-base font-medium text-gray-900">
                  <span class="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <router-link class="focus:outline-none" :to="{ name: 'Category' }">
                      <span aria-hidden="true" class="absolute inset-0"/>
                      Categories
                    </router-link>
                  </span>
                </h3>
                <p class="text-base text-gray-500">Visit our wide range of categories to view different forums</p>
              </div>
              <div class="flex-shrink-0 self-center">
                <ChevronRightIcon aria-hidden="true" class="h-5 w-5 text-gray-400"/>
              </div>
            </li>

            <li class="relative py-6 flex items-start space-x-4">
              <div class="min-w-0 flex-1">
                <h3 class="text-base font-medium text-gray-900">
                  <span class="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <router-link class="focus:outline-none" :to="{ name: 'Thread' }">
                      <span aria-hidden="true" class="absolute inset-0"/>
                      Threads
                    </router-link>
                  </span>
                </h3>
                <p class="text-base text-gray-500">Visit our wide range of threads</p>
              </div>
              <div class="flex-shrink-0 self-center">
                <ChevronRightIcon aria-hidden="true" class="h-5 w-5 text-gray-400"/>
              </div>
            </li>

            <li class="relative py-6 flex items-start space-x-4">
              <div class="min-w-0 flex-1">
                <h3 class="text-base font-medium text-gray-900">
                  <span class="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <router-link class="focus:outline-none" :to="{ name: 'Forum' }">
                      <span aria-hidden="true" class="absolute inset-0"/>
                      Forums
                    </router-link>
                  </span>
                </h3>
                <p class="text-base text-gray-500">Visit our wide range of Forum</p>
              </div>
              <div class="flex-shrink-0 self-center">
                <ChevronRightIcon aria-hidden="true" class="h-5 w-5 text-gray-400"/>
              </div>
            </li>
          </ul>
          <div class="mt-8">
            <a class="text-base font-medium text-indigo-600 hover:text-indigo-500" href="#">Or go back home<span
              aria-hidden="true"> &rarr;</span></a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ChevronRightIcon } from '@heroicons/vue/solid'

export default {
  name: 'NotFound',
  components: {
    ChevronRightIcon
  }
}
</script>

<style scoped>

</style>
