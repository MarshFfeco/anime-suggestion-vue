<script setup>
  import { ref, computed, onMounted,  } from 'vue'

  import { anime } from '../store/anime';

  const store = anime()

  const nameAnime = ref('')
  const NameAnime = computed({
    get() { return nameAnime.value },
    set(val) { nameAnime.value = val }
  })

  function sendAnimeName() {
    store.setName(NameAnime.value)
  }

  onMounted(() => {
    store.setName(NameAnime.value)
  })
</script>

<template>
  <form action="" @submit.prevent="sendAnimeName" method="get" class="SectionAnime__Form">
    <input type="text" v-model="NameAnime" autocomplete="off" placeholder="write name anime">
  </form>
</template>

<style scoped lang="scss">
  .SectionAnime__Form {
    @apply
      justify-self-center

      px-4
      py-2

      flex 
      items-center
      justify-center

      rounded-b-lg
      
      bg-gray-950;
      
    input {
      @apply
        px-3
        py-4

        text-center

        rounded-full
        
        text-gray-950;

        &:focus {
          @apply outline-none;
        }
    }
  }
</style>