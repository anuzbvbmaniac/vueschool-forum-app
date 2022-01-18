<template>
  <div class="min-h-full">
    <TheNavigation/>
    <router-view/>
    <TheFooter/>
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation'
import TheFooter from '@/components/TheFooter'

export default {
  name: 'App',
  components: { TheFooter, TheNavigation }
}
</script>
