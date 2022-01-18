<template>

  <AppHeadline :title="thread.title"/>

  <div class="max-w-8xl mx-auto sm:px-6 lg:px-8 mt-0">

    <PostList :posts="threadPosts"/>

    <PostComment @save-post="addPost"/>

  </div>
</template>

<script>
import AppHeadline from '@/components/AppHeadline'
import PostList from '@/components/PostList'

import PostComment from '@/components/PostComment'

export default {
  name: 'ThreadShow',
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      newPostText: ''
    }
  },
  components: {
    PostComment,
    PostList,
    AppHeadline
  },
  computed: {
    threads () {
      return this.$store.state.threads
    },
    posts () {
      return this.$store.state.posts
    },
    thread () {
      return this.threads.find(thread => thread.id === this.id)
    },
    threadPosts () {
      return this.posts.filter(post => post.threadId === this.id)
    }
  },
  methods: {
    addPost (eventData) {
      const post = {
        ...eventData.post,
        threadId: this.id
      }
      this.$store.dispatch('createPost', post)
    }
  }
}
</script>
