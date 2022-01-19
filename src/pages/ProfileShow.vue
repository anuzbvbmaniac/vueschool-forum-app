<template>
  <div class="max-w-8xl mx-auto sm:px-6 lg:px-8 mt-0">
    <div class="grid grid-cols-1 md:grid-cols-6 gap-8">

      <!-- Profile Card -->
      <ProfileCard v-if="!edit" :user="user"/>

      <!-- Profile Edit Form -->
      <UserProfileCardEditor v-else :user="user"/>

      <!-- Activity Feed Block -->
      <UserActivityList :posts="user.posts"/>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserActivityList from '@/components/UserActivityList'
import ProfileCard from '@/components/ProfileCard'
import UserProfileCardEditor from '@/components/UserProfileCardEditor'

export default {
  name: 'ProfileShow',
  components: { UserProfileCardEditor, ProfileCard, UserActivityList },
  props: {
    edit: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({ user: 'authUser' })
  }
}
</script>
