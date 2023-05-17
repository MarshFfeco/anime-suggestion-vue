<script setup>
  import { ref, reactive, watch, computed, onMounted, onUpdated } from 'vue'

  import api from '../service/kitsu'

  import { anime } from '../store/anime';

  import gsap from 'gsap'


  const isLoading = ref()
  const IsLoading = computed({
    get() { return isLoading.value },
    set(val) { isLoading.value = val }
  })

  const store = anime()

  const Name = computed({ get() { return store.getName } })

  const apiAnime = reactive({ Animes: [] })

  watch(() => Name.value, async (val) => {
    var result = []
    IsLoading.value = true
    await api.AnimeSuggestion(val).then(res => {
      apiAnime.Animes = []
      for(var i = 0; i < res.data.data.length; i++) {
        let nameA = res.data.data[i].attributes.titles.en_jp
        let imageA = res.data.data[i].attributes.posterImage?.small
        result.push({ name: nameA, image: imageA })
      }
    })

    apiAnime.Animes = result.filter(anime => {
       if(anime.name && anime.image) return anime
    })

    for(var anime of apiAnime.Animes) {
      console.log(anime.image)
    }

    IsLoading.value = false
  }, { immediate: true })


  onUpdated((el, done) => {
    var random = gsap.utils.random(-200, +200, 15, true);

    gsap.from(".anime", {
      stagger: .1,
      y: random, 
      x: random,
      duration: .7,
      opacity: '0',
      onComplete: done
    })
  })
</script>

<template>
  <lottie-player v-if="IsLoading" src="https://assets9.lottiefiles.com/packages/lf20_9zddpfah.json" background="transparent"  speed="1"  style="width: 300px; height: 300px;" loop autoplay></lottie-player>
  
  <div class="container" v-else>
    <div 
      class="anime" 
      v-for="anime of apiAnime.Animes"
      :key="anime.key" 
      v-show="!IsLoading" 
    >
      <img :src="anime.image" alt="">

      <p 
      >
        {{ anime.name }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .container {
    @apply 
      overflow-auto
      overflow-x-hidden
      h-full

      px-2
      py-4

      grid
      gap-4

      lg:grid-cols-3
      md:grid-cols-2
      sm:grid-cols-1;
  }

  .anime {
    @apply 
      flex
      flex-col

      px-4
      py-6

      gap-5

      justify-center
      items-center

      bg-gray-50
      
      drop-shadow-md;

    p {

    }

    img {
    }
  }
</style>