<script setup>
  import Sectionform from '../components/SectionForm.vue'
  import SectionContent from '../components/SectionContent.vue';
</script>

<template>
  <section class="SectionAnime">
    <Sectionform />

    <SectionContent />
  </section>
</template>

<style>
  .SectionAnime {
    display: grid;
    grid-template-rows: 0.1fr 1fr;

    @apply 
      h-full

      gap-10

      bg-gray-50;
  }
</style>