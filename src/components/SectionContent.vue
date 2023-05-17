<script setup>
  import NothingHere from './NothingHere.vue';
  import ContentHook from './ContentHook.vue';

  import { computed } from 'vue'

  import { anime } from '../store/anime';

  const store = anime()

  const name = computed({ get() { return store.getName } })
</script>

<template>
  <div class="SectionAnime__content">
    <NothingHere v-if="!name" />
    <ContentHook v-else />
  </div>
</template>

<style scoped lang="scss">
  .SectionAnime__content {
    @apply 
      overflow-auto
      flex 
      flex-col 
      
      justify-center 
      items-center;
  }
</style>