<template>

  <AppHeadline :title="'Welcome To The Forum'"/>

  <main class="pt-0 pb-16 space-y-8">
    <CategoryList :categories="categories"/>
  </main>

</template>

<script>
import AppHeadline from '@/components/AppHeadline'
import CategoryList from '@/components/CategoryList'

export default {
  components: {
    CategoryList,
    AppHeadline
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  }
}
</script>
