<template>
  <div class="max-w-8xl mx-auto sm:px-6 lg:px-8">
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          {{ category.name }}
        </h3>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
          <!-- Stacked list -->
          <ul class="border-t border-gray-200 divide-y divide-gray-200 sm:mt-0 sm:border-t-0" role="list">
            <ForumList
              :forums="getForumsForCategory(category)"
              :title="category.name"
            />
          </ul>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import ForumList from '@/components/ForumList'

export default {
  name: 'Category',
  components: {
    ForumList
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    category () {
      return this.$store.state.categories.find(category => {
        return category.id === this.id
      })
    }
  },
  methods: {
    getForumsForCategory (category) {
      return this.$store.state.forums.filter(forum => {
        return forum.categoryId === category.id
      })
    }
  }
}
</script>

<style scoped>

</style>
