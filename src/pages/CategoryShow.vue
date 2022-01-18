<template>

  <AppHeadline :title="category.name"/>

  <ForumList
    :forums="getForumsForCategory(category)"
    :title="category.name"
  />
</template>

<script>

import ForumList from '@/components/ForumList'

export default {
  name: 'CategoryShow',
  components: { ForumList },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    category () {
      return this.$store.state.categories.find(category => category.id === this.id)
    }
  },
  methods: {
    getForumsForCategory (category) {
      return this.$store.state.forums.filter(forum => forum.categoryId === category.id)
    }
  }
}
</script>

<style scoped>

</style>
