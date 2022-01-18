<template>
  <AppHeadline :description="forum.description" :title="forum.name"/>

  <main class="pt-0 pb-16">
    <ThreadList :threads="threads"/>
  </main>
</template>

<script>
import ThreadList from '@/components/ThreadList'

export default {
  name: 'ForumShow',
  props: {
    id: {
      required: true,
      type: String
    }
  },
  components: { ThreadList },
  computed: {
    forum () {
      return this.$store.state.forums.find(forum => forum.id === this.id)
    },
    threads () {
      return this.$store.state.threads.filter(thread => thread.forumId === this.id)
    }
  }
}
</script>
