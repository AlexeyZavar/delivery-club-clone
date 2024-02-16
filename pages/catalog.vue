<template>
  <div id="main">
    <Banners />
    <div id="catalog">
      <p class="font-bold text-4xl">Рестораны</p>
      <div
        class="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8"
      >
        <catalog-card />
        <catalog-card />
        <catalog-card />
        <catalog-card />
        <catalog-card />
        <catalog-card />
        <catalog-card />
        <catalog-card />
        <catalog-card />
        <catalog-card />
        <catalog-card />
        <catalog-card />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import CatalogCard from '~/components/CatalogCard.vue'

export default Vue.extend({
  name: 'Catalog',
  components: { CatalogCard },
  layout: 'main',
})
</script>

<style scoped>
#main {
  @apply px-4 sm:px-16 md:px-20 lg:px-40;
}

#catalog {
  @apply mt-10;
}
</style>
